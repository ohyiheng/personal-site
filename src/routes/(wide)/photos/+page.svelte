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

    function replaceImg(oldImage, newUrl) {
        let newImage = new Image();
        newImage.src = newUrl;
        newImage.onload = () => {
            oldImage.src = newUrl;
        };
    }

    onMount(() => {
        const container = document.querySelector("#photos-container");
        let nCol = 0;

        function setLayout() {
            let masonry = {
                _el: container,
                gap: parseFloat(getComputedStyle(container).gap),
                children: Array.from(container.childNodes).filter(
                    (child) => child.nodeType === 1,
                ),
                nCol: getComputedStyle(container).gridTemplateColumns.split(" ")
                    .length,
            };

            if (nCol !== masonry.nCol) {
                nCol = masonry.nCol;

                masonry.children.forEach((child) => {
                    child.style.removeProperty("margin-top");
                });

                for (let i = 0; i < masonry.children.length - nCol; i++) {
                    let top =
                        masonry.children[i].getBoundingClientRect().bottom;
                    let bottom =
                        masonry.children[i + nCol].getBoundingClientRect().top;
                    let offset = top - bottom + masonry.gap;

                    masonry.children[i + nCol].style.marginTop = `${offset}px`;
                }
            }
        }

        setLayout();
        window.addEventListener("load", setLayout);
        window.addEventListener("resize", setLayout);
        lightbox.init();
    });
</script>

<div class="grid gap-4 z-10" id="photos-container">
    {#each data.photos as { url, preview, width, height }}
        <a
            href={url}
            class="self-start photo"
            data-pswp-width={width}
            data-pswp-height={height}
        >
            <img class="rounded-sm block w-full" src={preview} alt="" use:replaceImg={url} />
        </a>
    {/each}
</div>

<style>
    #photos-container {
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
</style>
