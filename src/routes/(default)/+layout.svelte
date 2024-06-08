<script>
    import NavBar from "$lib/NavBar.svelte";
    import "/src/app.css";
</script>

<NavBar />

<hr class="border-gray-300 dark:border-gray-700 mb-16" />

<main class="mx-auto w-[90vw] md:w-[65ch]">
    <slot />
</main>
