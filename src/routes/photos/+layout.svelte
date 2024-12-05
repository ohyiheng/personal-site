<script>
    import { onMount } from "svelte";
    import { afterNavigate } from "$app/navigation";
    import PhotoSwipeLightbox from "photoswipe/lightbox";
    import "photoswipe/style.css";
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();

    const lightbox = new PhotoSwipeLightbox({
        gallery: "#photos-container",
        children: "a",
        wheelToZoom: true,
        pswpModule: () => import("photoswipe"),
    });

    function updateGallery() {
        let photos = document.querySelectorAll("img");

        Array.from(photos).map((photo) => {
            // Has a dependency on photoswipe's attribute, maybe there's a better way?
            let width = photo.parentElement.getAttribute("data-pswp-width");
            let height = photo.parentElement.getAttribute("data-pswp-height");

            let aspectRatio = height / width;

            // If portrait
            if (aspectRatio > 1.15) {
                photo.parentElement.classList.replace(
                    "row-span-6",
                    "row-span-12",
                );
            }
            // If close to square
            else if (aspectRatio <= 1.15 && aspectRatio >= 0.9) {
                photo.parentElement.classList.replace(
                    "row-span-6",
                    "row-span-8",
                );
            } else if (aspectRatio <= 0.7 && aspectRatio >= 0.5) {
                photo.parentElement.classList.replace(
                    "row-span-6",
                    "row-span-5",
                );
            } else if (aspectRatio <= 0.5) {
                photo.parentElement.classList.replace(
                    "row-span-6",
                    "row-span-4",
                );
            }
        });
    }

    onMount(() => {
        updateGallery();
        lightbox.init();
    });

    afterNavigate(() => {
        updateGallery();
        lightbox.init();
    });
</script>

{@render children?.()}
