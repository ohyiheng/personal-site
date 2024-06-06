<script>
    import "../app.css";
    import Logo from "../Logo.svelte";
    import NavButton from "/src/NavButton.svelte";
    import Heading from "../Heading.svelte";
    import { title } from "../stores.js";
</script>

<nav class="w-11/12 mx-auto mb-8 md:w-4/5 xl:w-3/5">
    <!-- logo -->
    <a href="/" class="w-36 h-auto inline-block mx-auto mt-6 mb-5">
        <Logo />
    </a>

    <div class="flex flex-wrap gap-3">
        <NavButton label={"about"} />
        <NavButton label={"about"} />
        <NavButton label={"about"} />
        <NavButton label={"about"} />
    </div>
</nav>

<hr class="border-primary-900 dark:border-primary-600 mb-12 opacity-50" />

<Heading title={$title} />
<main class="mx-auto">
    <slot />
</main>

<style>
    main {
        width: 80ch;
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
