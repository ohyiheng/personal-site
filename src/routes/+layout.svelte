<script>
    import "../app.css";
    import NavButton from "./NavButton.svelte";
</script>

<nav class="w-3/5 mx-auto mb-12">
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
            style="stroke: var(--primary)"
            stroke-width="8"
        />
        <path d="M1 55L45 55" stroke="#748C6C" stroke-width="8" />
        <path d="M23 0L23 17" stroke="#748C6C" stroke-width="8" />
    </svg>

    <div class="flex flex-wrap gap-3">
        <NavButton text={"about"} />
        <NavButton text={"about"} />
        <NavButton text={"about"} />
        <NavButton text={"about"} />
    </div>
</nav>

<main>
    <slot />
</main>

<style>
    main {
        margin: auto;
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
