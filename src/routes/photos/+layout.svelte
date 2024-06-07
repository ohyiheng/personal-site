<script>
    import NavBar from "$lib/NavBar.svelte";
    import "/src/app.css";
</script>

<NavBar />

<hr class="border-primary-900 dark:border-primary-600 mb-12 opacity-50" />

<main class="mx-auto w-11/12 md:w-4/5">
    <slot />
</main>
