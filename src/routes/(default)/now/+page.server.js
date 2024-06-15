export async function load(event) {
    const lastFMAPIKey = import.meta.env.VITE_LASTFM_API_KEY;
    const lastFMUsername = import.meta.env.VITE_LASTFM_USERNAME;

    async function fetchLastFM(method, period, limit) {
        try {
            const response = await fetch(
                `https://ws.audioscrobbler.com/2.0/?method=${method}&user=${lastFMUsername}&period=${period}&limit=${limit}&api_key=${lastFMAPIKey}&format=json`,
            );
            if (!response.ok) {
                throw new Error(
                    `Fetch last.fm failed with status: ${response.status}!`,
                );
            }
            const data = await response.json();
            return data.topalbums.album;
        } catch (err) {
            console.log(err.message);
        }
    }

    const nowUpdateData = await event.locals.sanityClient
        .fetch("*[_type == 'nowUpdate'] | order(_createdAt desc)[0]")
        .catch((err) => { console.log("Fetch now update failed: ", err.message) });
    const topAlbumsData = await fetchLastFM("user.getTopAlbums", "7day", 6);

    return {
        title: "what i'm currently doing",
        nowUpdate: { date: nowUpdateData.date, content: nowUpdateData.updates },
        topAlbums: topAlbumsData.map(album => ({
            name: album.name,
            url: album.url,
            image: album.image[2]['#text']
        }))
    }
}

