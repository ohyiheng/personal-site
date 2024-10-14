<script>
    import { onMount } from "svelte";
    import PhotoSwipeLightbox from "photoswipe/lightbox";
    import "photoswipe/style.css";

    const lightbox = new PhotoSwipeLightbox({
        gallery: "#photos-container",
        children: "a",
        wheelToZoom: true,
        pswpModule: () => import("photoswipe"),
    });

    onMount(() => {
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

        lightbox.init();
    });
</script>

<slot></slot>
