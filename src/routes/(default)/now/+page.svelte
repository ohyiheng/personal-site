<script>
    export let data;
    import { PortableText } from '@portabletext/svelte';
</script>

<h1>what i'm doing now</h1>

<div class="space-y-4 mb-14">
    <PortableText value={data.nowUpdate.content} />
    <p class="italic text-caption">
        Last updated: {data.nowUpdate.date}.<br /> This page is inspired by the
        <a href="https://nownownow.com/about" target="_blank"
            >/now page movement</a
        >.
    </p>
</div>

<h2>top albums i'm listening</h2>
<div class="grid grid-cols-3 lg:grid-cols-5 gap-1 mb-14">
    {#each data.topAlbums.slice(0, 5) as { name, artist, image, albumLink, artistLink }}
        <a
            href={albumLink}
            target="_blank"
            class="px-2 py-3 rounded-sm hover:bg-primary-600/10 dark:hover:bg-primary-100/10"
        >
            <img
                src={image}
                alt="Album image of {name}"
                class="w-full object-cover rounded shadow-md shadow-primary-700/40 dark:shadow-primary-900 mb-3"
            />
            <div class="flex flex-col truncate">
                <a
                    href={albumLink}
                    target="_blank"
                    class="truncate text-base hover:text-secondary-500 dark:hover:text-secondary-400"
                    >{name}</a
                >
                <a
                    href={artistLink}
                    target="_blank"
                    class="text-primary-600 text-sm truncate hover:text-secondary-500 dark:hover:text-secondary-400"
                    >{artist}</a
                >
            </div>
        </a>
    {/each}
</div>
