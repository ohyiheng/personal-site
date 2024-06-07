<script>
    import { title } from "../../stores.js";
    title.set("what i'm currently doing");

    export let data;
</script>

<div class="space-y-4 mb-10">
    <p>
        I'm currently on a sembreak, chilling at home. My next semester is going
        to be a lot harder than the first two, as I'm about to dive into
        unfamiliar territory, stuff like Discrete Math, Computer Architecture,
        more advanced Data Structures.
    </p>
    <p>
        They seem exciting, but I'm also worried about them taking up too much
        of my focus. On one hand I do want to direct most of my focus on the
        courses, but on the other hand, I would also like to spend more time
        doing other stuff, maybe joining clubs and societies, or taking up a
        personal project.
    </p>
    <p class="italic">
        Last updated: 2024-06-06.<br /> This page is inspired by the
        <a href="https://nownownow.com/about" target="_blank"
            >/now page movement</a
        >.
    </p>
</div>

<h2>top albums i'm listening</h2>
<div class="grid grid-cols-3 lg:grid-cols-5 gap-1 mb-14">
    {#each data.myTopAlbums.slice(0, 5) as { name, artist, image, albumLink, artistLink }}
        <a
            href={albumLink}
            target="_blank"
            class="px-2 py-3 rounded-sm hover:bg-primary-600/10 dark:hover:bg-primary-400/10"
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
