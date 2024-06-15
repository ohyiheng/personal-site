<script>
    import { onMount } from "svelte";
    import PhotoSwipeLightbox from "photoswipe/lightbox";
    import "photoswipe/style.css";
    export let data;

    const lightbox = new PhotoSwipeLightbox({
        gallery: "#photos-container",
        children: "a",
        wheelToZoom: true,
        pswpModule: () => import("photoswipe"),
    });

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

    onMount(() => {
        let photos = document.querySelectorAll("img");
        
        Array.from(photos).map((photo) => {
            // Has a dependency on photoswipe's attribute, maybe there's a better way?
            let width = photo.parentElement.getAttribute("data-pswp-width");
            let height = photo.parentElement.getAttribute("data-pswp-height");

            let aspectRatio = height / width;

            // If portrait
            if (aspectRatio > 1.15) {
                photo.parentElement.classList.add("row-span-12");
            } 
            // If close to square
            else if (aspectRatio <= 1.15 && aspectRatio >= 0.9) {
                photo.parentElement.classList.add("row-span-8");
            } 
            // If quite a bit wider than standard 3:2 (0.666)
            else if (aspectRatio <= 0.6) {
                photo.parentElement.classList.add("row-span-4");
            }
        });

        lightbox.init();
    });
</script>

<div class="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] auto-rows-[25px] z-10" id="photos-container">
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
