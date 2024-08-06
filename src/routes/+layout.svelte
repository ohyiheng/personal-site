<script>
    import NavBar from "$lib/NavBar.svelte";
    import Footer from "$lib/Footer.svelte";
    import { page } from "$app/stores";
    import "../app.css";
    import { onMount } from "svelte";
    let isMounted = false;

    function setTitle() {
        const firstH1 = document.querySelector("h1");
        if (firstH1) document.title = `${firstH1.textContent} | yhng.me`;
    }

    onMount(() => {
        isMounted = true;
        setTitle();
    });

    $: if (isMounted && $page) setTitle();
</script>

<svelte:head>
    <script
        defer
        src="/script.js"
        data-website-id="80460916-8e06-4c5e-a819-562e50eba01a"
    ></script>
</svelte:head>

<div class="flex flex-col min-h-screen">
    <NavBar />

    <slot />

    <Footer />
</div>
