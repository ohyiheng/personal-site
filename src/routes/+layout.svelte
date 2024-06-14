<script>
    import NavBar from "$lib/NavBar.svelte";
    import Title from "$lib/Title.svelte";
    import { page } from "$app/stores";
</script>

<svelte:head>
    <title>{$page.data.title} | yiheng</title>
</svelte:head>
    <NavBar />

    <Title content={$page.data.title} />

    <slot />
