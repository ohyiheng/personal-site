<script>
    import NavBar from "$lib/NavBar.svelte";
    import Title from "$lib/Title.svelte";
    import Footer from "$lib/Footer.svelte";
    import { page } from "$app/stores";
    import '../app.css';
</script>

<svelte:head>
    <title>{$page.data.title} | yiheng</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
    <NavBar />

    <Title content={$page.data.title} />

    <slot />

    <Footer />
</div>
