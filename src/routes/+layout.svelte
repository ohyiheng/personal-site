<script>
    import "../app.css";
    import NavButton from "/src/NavButton.svelte";
    import Heading from "../Heading.svelte";
    import { title } from "../stores.js";
</script>

<nav class="w-11/12 mx-auto mb-8 md:w-4/5 xl:w-3/5">
    <!-- logo -->
    <svg
        class="mx-auto mt-6 mb-7"
        width="45"
        height="59"
        viewBox="0 0 45 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M4.72093 0V26M1 40H41V0"
                class="stroke-primary-900 dark:stroke-primary-300"
            stroke-width="8"
        />
        <path d="M1 55L45 55" stroke="#748C6C" stroke-width="8" />
        <path d="M23 0L23 17" stroke="#748C6C" stroke-width="8" />
    </svg>

    <div class="flex flex-wrap gap-3">
        <NavButton label={"about"} />
        <NavButton label={"about"} />
        <NavButton label={"about"} />
        <NavButton label={"about"} />
    </div>
</nav>

<hr class="bg-primary-900 dark:bg-primary-400 mb-12 opacity-50" />

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
