<script>
    import Logo from "$lib/Logo.svelte";
    import LogoError from "$lib/LogoError.svelte";
    import NavButton from "$lib/NavButton.svelte";
    import { page } from "$app/stores";
    let pages = ["about", "now", "projects", "photos"];

    import tippy from "tippy.js";
    import { onMount } from "svelte";

    let lastScrollTop = 0;

    onMount(() => {
        const nav = document.querySelector("#navbar");

        function handleScroll() {
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;

            scrollTop > lastScrollTop ? nav.classList.add("max-md:translate-y-28") : nav.classList.remove("max-md:translate-y-28");

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        }

        window.addEventListener("scroll", handleScroll);

        tippy("#button", {
            content: document.querySelector("#menu").innerHTML,
            allowHTML: true,
            trigger: "click focus mouseenter",
            interactive: true,
            placement: "top-end",
            offset: [0, 24],
            duration: [50, 50],
        });
    });
</script>

<svelte:body class:overflow-hidden={active} />

<div
    id="navbar"
    class="bg-white dark:bg-gray-850 border-gray-200 dark:border-gray-750
    shadow-[0_-2px_16px_-3px_rgba(0,0,0,0.05)]
     py-3 fixed bottom-0 md:sticky md:top-0 w-full border-t md:border-b md:bg-opacity-80 md:backdrop-blur-xl duration-150 ease-in-out z-20"
>
    <nav
        class="h-9 md:h-8 flex place-content-between items-center w-11/12 mx-auto max-w-[54rem] px-3 md:px-8"
        data-sveltekit-preload-data
    >
        <a href="/" class="w-20 sm:w-24 md:w-28 h-auto inline-block">
            {#if $page.error}
                <LogoError />
            {:else}
                <Logo />
            {/if}
        </a>

        <div class="hidden md:flex gap-3 md:gap-4">
            {#each pages as page}
                <NavButton label={page} />
            {/each}
        </div>
        <button
            id="button"
            class="flex flex-col md:hidden h-4 cursor-pointer place-content-between"
        >
            <div class="h-0.5 w-6 bg-gray-800"></div>
            <div class="h-0.5 w-6 bg-gray-800"></div>
            <div class="h-0.5 w-6 bg-gray-800"></div>
        </button>
        <div id="menu" class="hidden">
            <div
                class="md:hidden flex flex-col gap-2 bg-white border rounded shadow-md py-6 px-8"
            >
                {#each pages as page}
                    <NavButton label={page} />
                {/each}
            </div>
        </div>
    </nav>
</div>
