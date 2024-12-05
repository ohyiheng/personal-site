<script>
    import Title from "$lib/Title.svelte";
    import Body from "$lib/Body.svelte";
    import Link from "$lib/Link.svelte";
    let { data } = $props();

    /**
     * Replaces the source URL of an image element with a new image once it finishes loading.
     *
     * @param {HTMLImageElement} oldImage - The image element to replace the source URL of.
     * @param {string} newUrl - The new URL to set as the source of the image element.
     */
    function replaceImg(oldImage, newUrl) {
        let newImage = new Image();
        newImage.src = newUrl;
        newImage.onload = () => {
            oldImage.src = newUrl;
        };
    }
</script>

<Title
    >stage photography
    {#snippet caption()}
        <p >a collection of stage photos i took</p>
    {/snippet}
</Title>

<Body width="full" flex>
    {#if data.photos.length == 0}
        <div class="h-full flex justify-center items-center">
            <p>nothing to see here... :(</p>
        </div>
    {:else}
        <div
            class="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] auto-rows-[25px] z-10"
            id="photos-container"
        >
            {#each data.photos as { url, preview, width, height }}
                <a
                    href={url}
                    class="photo overflow-hidden row-span-6"
                    data-pswp-width={width}
                    data-pswp-height={height}
                    data-cropped="true"
                >
                    <img
                        class="rounded-sm block w-full h-full object-cover"
                        src={preview}
                        alt=""
                        use:replaceImg={url}
                    />
                </a>
            {/each}
        </div>
    {/if}
</Body>
