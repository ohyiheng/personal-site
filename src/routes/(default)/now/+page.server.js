export async function load() {
    const lastFMAPIKey = import.meta.env.VITE_LASTFM_API_KEY;
    const lastFMUsername = import.meta.env.VITE_LASTFM_USERNAME;

    async function fetchLastFM(method, period) {
        try {
            const response = await fetch(
                `https://ws.audioscrobbler.com/2.0/?method=${method}&user=${lastFMUsername}&period=${period}&api_key=${lastFMAPIKey}&format=json`,
            );
            if (!response.ok) {
                throw new Error(`Error with status: ${response.status}!`);
            }
            const data = await response.json();
            return data;
        } catch (err) {
            console.error("Error:", err);
        }
    }

    const topAlbums = await fetchLastFM("user.getTopAlbums", "7day");
    // const topTracks = fetchLastFM("user.getTopTracks", "7day");

    return {
        myTopAlbums: topAlbums.topalbums.album.map((album) => ({
            name: album.name,
            artist: album.artist.name,
            image: album.image[2]['#text'],
            albumLink: album.url,
            artistLink: album.artist.url
        }))
    }
}

