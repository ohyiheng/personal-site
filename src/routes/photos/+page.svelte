<script>
    import { onMount } from "svelte";
    import PhotoSwipeLightbox from "photoswipe/lightbox";
    import "photoswipe/style.css";

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

<div class="grid" id="photos-container">
    <img src="/alcohol.jpg" alt="" />
    <img src="/avocado.jpg" alt="" />
    <img src="/block.jpg" alt="" />
    <img src="/mountain.jpg" alt="" />
    <img src="/plant.jpg" alt="" />
    <img src="/shake.jpg" alt="" />
    <img src="/alcohol.jpg" alt="" />
    <img src="/avocado.jpg" alt="" />
    <img src="/block.jpg" alt="" />
    <img src="/mountain.jpg" alt="" />
    <img src="/plant.jpg" alt="" />
    <img src="/shake.jpg" alt="" />
    <img src="/alcohol.jpg" alt="" />
    <img src="/avocado.jpg" alt="" />
    <img src="/block.jpg" alt="" />
    <img src="/mountain.jpg" alt="" />
    <img src="/plant.jpg" alt="" />
    <img src="/shake.jpg" alt="" />
</div>
