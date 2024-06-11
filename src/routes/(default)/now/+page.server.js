export async function load(event) {
    const lastFMAPIKey = import.meta.env.VITE_LASTFM_API_KEY;
    const lastFMUsername = import.meta.env.VITE_LASTFM_USERNAME;

    async function fetchLastFM(method, period) {
        try {
            const response = await fetch(
                `https://ws.audioscrobbler.com/2.0/?method=${method}&user=${lastFMUsername}&period=${period}&api_key=${lastFMAPIKey}&format=json`,
            );
            if (!response.ok) {
                throw new Error(`Fetch last.fm failed with status: ${response.status}!`);
            }
            const data = await response.json();
            return data;
        } catch (err) {
            console.error("Error:", err);
        }
    }

    const nowUpdateData = await event.locals.sanityClient.fetch("*[_type == 'nowUpdate'] | order(_createdAt desc)[0]");
    const topAlbumsFetch = await fetchLastFM("user.getTopAlbums", "7day");

    return {
        topAlbums: topAlbumsFetch.topalbums.album.map((album) => ({
            name: album.name,
            artist: album.artist.name,
            image: album.image[2]['#text'],
            albumLink: album.url,
            artistLink: album.artist.url
        })),
        nowUpdate: { date: nowUpdateData.date, content: nowUpdateData.updates }
    }
}

