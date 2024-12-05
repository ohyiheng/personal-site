<script>
    import Title from "$lib/Title.svelte";
    import Body from "$lib/Body.svelte";
</script>

<Title
    >projects
    {#snippet caption()}
        <p >my personal software development projects</p>
    {/snippet}
</Title>
<Body width="normal">
    <div class="flex flex-col gap-4 w-11/12 mx-auto">
        <a
            href="https://github.com/rainmrn/gust"
            target="_blank"
            class="flex flex-col border border-gray-200 dark:border-gray-750 rounded cursor-pointer hover:border-secondary-500 hover:dark:border-secondary-400
    overflow-hidden duration-150 ease-in-out"
        >
            <div class="p-6 space-y-2">
                <strong> GUST: Get Your Songs Tagged </strong>
                <p>
                    A Python CLI utility to automatically tag your local
                    music files using metadata retrieved from Spotify.
                </p>
            </div>
        </a>
    </div>
</Body>
