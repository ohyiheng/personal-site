<script>
    import "../app.css";
    import Logo from "../Logo.svelte";
    import NavButton from "/src/NavButton.svelte";
    import Title from "../Title.svelte";
    import { title } from "../stores.js";
</script>

<nav class="text-center w-11/12 mx-auto mb-8 md:w-4/5 xl:w-3/5">
    <!-- logo -->
    <a href="/" class="w-36 h-auto inline-block mx-auto mt-6 mb-5">
        <Logo />
    </a>

    <div class="flex flex-wrap gap-3">
        <NavButton label={"about"} link={"/about"} />
        <NavButton label={"now"} link={"/now"} />
        <NavButton label={"photos"} />
        <NavButton label={"uses"} />
    </div>
</nav>

<hr class="border-primary-900 dark:border-primary-600 mb-12 opacity-50" />

<div class="text-center">
    <Title title={$title} />
</div>
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
