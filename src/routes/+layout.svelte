<script>
    import { afterNavigate } from "$app/navigation";
    import NavBar from "$lib/NavBar.svelte";
    import Footer from "$lib/Footer.svelte";
    import "../app.css";
    import { onMount } from "svelte";
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();

    function setTitle() {
        const title = document.querySelector("#title");
        if (title) document.title = `${title.textContent} | yhng.me`;
    }

    onMount(() => {
        setTitle();
    });

    afterNavigate(() => {
        setTitle();
    });
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

    {@render children?.()}

    <Footer />
</div>
<div class="bg-gray-950 h-14 md:h-0"></div>
