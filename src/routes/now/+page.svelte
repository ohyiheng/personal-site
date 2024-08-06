<script>
    export let data;
    import { PortableText } from "@portabletext/svelte";
    import Link from "$lib/Link.svelte";
    import Title from "$lib/Title.svelte";
    import Body from "$lib/Body.svelte";
</script>

<Title>
    now
    <p slot="caption">what i'm currently up to</p>
    <p slot="date">{data.nowUpdate.date}</p>
    <p slot="tags">Something, another-thing</p>
</Title>

<Body width="normal">
    <div class="space-y-4 pb-20">
        <p>📌 <strong>Location:</strong> {data.nowUpdate.location}</p>
        <hr class="border-gray-200 dark:border-gray-750" />
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
    <div class="grid grid-cols-3 gap-3">
        {#each data.topAlbums as { name, url, image }}
            <a href={url} target="_blank">
                <img
                    src={image}
                    alt="Album image of {name}"
                    class="w-full object-cover rounded border border-gray-200 dark:border-gray-850 hover:shadow-lg shadow-gray-200 dark:shadow-gray-950 mb-3 hover:scale-105 hover:-rotate-3 duration-150 ease-in-out"
                />
            </a>
        {/each}
    </div>
</Body>
