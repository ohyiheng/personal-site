<script>
    import { onMount } from "svelte";
    import PhotoSwipeLightbox from "photoswipe/lightbox";
    import "photoswipe/style.css";
    export let data;

    const lightbox = new PhotoSwipeLightbox({
        gallery: "#photos-container",
        children: "a",
        pswpModule: () => import("photoswipe"),
    });

    onMount(async () => {
        const Macy = (await import("macy")).default;
        var macy = new Macy({
            container: "#photos-container",
            margin: 16,
            breakAt: {
                1280: 4,
                1024: 3,
                768: 2,
            },
        });

        lightbox.init();
    });
</script>

<h1 class="mb-12">photos i took</h1>

<div id="photos-container">
    {#each data.photos as { url, width, height }}
    <a href={url} data-pswp-width={width} data-pswp-height={height}
        ><img src={url} alt="" />
    </a>
    {/each}
</div>
