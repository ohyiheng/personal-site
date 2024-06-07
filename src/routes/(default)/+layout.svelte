<script>
    import NavBar from "$lib/NavBar.svelte";
    import "/src/app.css";
</script>

<NavBar />

<hr class="border-primary-900 dark:border-primary-600 mb-12 opacity-50" />

<main class="mx-auto">
    <slot />
</main>

<style>
    main {
        width: 65ch;
    }

    @media (max-width: 1280px) {
    }

    @media (max-width: 1024px) {
        main {
            width: 80vw;
        }
    }

    @media (max-width: 767px) {
        /* CSS */
    }

    @media (max-width: 480px) {
        main {
            width: 90vw;
        }
    }
</style>
