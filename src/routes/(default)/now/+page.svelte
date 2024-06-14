<script>
    export let data;
    import { PortableText } from "@portabletext/svelte";
    import Link from "$lib/Link.svelte";

    const lastFMAPIKey = import.meta.env.VITE_LASTFM_API_KEY;
    const lastFMUsername = import.meta.env.VITE_LASTFM_USERNAME;

    async function fetchLastFM(method, period) {
        try {
            const response = await fetch(
                `https://ws.audioscrobbler.com/2.0/?method=${method}&user=${lastFMUsername}&period=${period}&api_key=${lastFMAPIKey}&format=json`,
            );
            if (!response.ok) {
                throw new Error(
                    `Fetch last.fm failed with status: ${response.status}!`,
                );
            }
            const data = await response.json();
            console.log(data.topalbums.album[0]);
            return data.topalbums.album;
        } catch (err) {
            console.log(err.message);
        }
    }
</script>

<div class="space-y-4 pb-20">
    <PortableText value={data.nowUpdate.content} />
    <p class="text-caption">
        Last updated: <span
            class="inline-block px-1 rounded-md bg-secondary-100 text-secondary-600 dark:bg-secondary-600 dark:text-secondary-100 font-bold"
            >{data.nowUpdate.date}</span
        ><br /> This page is inspired by the
        <Link href={"https://nownownow.com/about"}>/now page movement</Link>.
    </p>
</div>

<h2>top albums i'm listening</h2>
{#await fetchLastFM("user.getTopAlbums", "7day")}
    <div class="flex items-center justify-center">
        <p class="mt-4 inline-block">Loading album listening stats...</p>
        <div
            class="w-5 h-5 p-0 rounded-full border-[3px] bg-transparent border-gray-600 border-t-secondary-400 animate-spin inline-block ml-4"
        ></div>
    </div>
{:then albums}
    <div class="grid grid-cols-3 gap-3">
        {#each albums.slice(0, 6) as album}
            <a href={album.url} target="_blank">
                <img
                    src={album.image[2]["#text"]}
                    alt="Album image of {album.name}"
                    class="w-full object-cover rounded border border-gray-200 dark:border-gray-850 hover:shadow-lg shadow-gray-200 dark:shadow-gray-950 mb-3 hover:scale-105 hover:-rotate-3 duration-150 ease-in-out"
                />
            </a>
        {/each}
    </div>
{:catch err}
    <p class="text-red-400">
        Error loading music listening stats: {err.message}
    </p>
{/await}
