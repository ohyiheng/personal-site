<script>
    import { title } from "../../stores.js";
    title.set("what i'm currently doing");

    export let data;
</script>

{#each data.myTopAlbums as { name, artist }}
    <p>{name} by {artist}</p>
{/each}
