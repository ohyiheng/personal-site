<script>
    import NavBar from "$lib/NavBar.svelte";
    import "/src/app.css";
</script>

<NavBar />

<hr class="border-gray-300 dark:border-gray-700 mb-16" />

<main class="mx-auto w-11/12 md:w-4/5">
    <slot />
</main>
