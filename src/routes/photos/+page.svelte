<script>
    import { onMount } from "svelte";

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
    });
</script>

<h1>photos i took</h1>

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
