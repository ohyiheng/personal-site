<script>
    import NavBar from "$lib/NavBar.svelte";
    import Title from "$lib/Title.svelte";
    import Footer from "$lib/Footer.svelte";
    import { page } from "$app/stores";
    import "../app.css";
</script>

<svelte:head>
    <title>{$page.data.title} | yiheng</title>
    <script defer src="/script.js" data-website-id=80460916-8e06-4c5e-a819-562e50eba01a></script>
</svelte:head>

<div class="flex flex-col min-h-screen">
    <NavBar />

    <Title>{$page.data.title}</Title>

    <slot />

    <Footer />
</div>
