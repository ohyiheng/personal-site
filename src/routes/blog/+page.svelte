<script>
    import Title from "$lib/Title.svelte";
    import Body from "$lib/Body.svelte";
</script>

<Title>
    blog
    {#snippet caption()}
        <p >my thoughts and experiences</p>
    {/snippet}
</Title>

<Body width="wide"></Body>