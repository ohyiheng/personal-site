export async function load() {
    const lastFMAPIKey = import.meta.env.VITE_LASTFM_API_KEY;
    const lastFMUsername = import.meta.env.VITE_LASTFM_USERNAME;
    const cmsToken = import.meta.env.VITE_CMS_TOKEN;
    const queryURL = import.meta.env.VITE_CMS_HTTP_QUERY_NOW

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

    async function fetchNowUpdates() {
        try {
            const response = await fetch(queryURL, {
                headers: {
                    'Authorization': `Bearer ${cmsToken}`
                }
            });
            if (!response.ok) {
                throw new Error(`Fetch now updates failed with status: ${response.status}!`);
            }
            return await response.json();
        } catch (err) {
            console.error(err);
        }
    }

    const topAlbumsFetch = await fetchLastFM("user.getTopAlbums", "7day");
    const nowUpdatesFetch = await fetchNowUpdates();
    // const topTracks = fetchLastFM("user.getTopTracks", "7day");

    return {
        topAlbums: topAlbumsFetch.topalbums.album.map((album) => ({
            name: album.name,
            artist: album.artist.name,
            image: album.image[2]['#text'],
            albumLink: album.url,
            artistLink: album.artist.url
        })),
        nowUpdates: {
            date: nowUpdatesFetch.result[0].date,
            content: nowUpdatesFetch.result[0].updates
        }
    }
}

