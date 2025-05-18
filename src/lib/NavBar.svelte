<script>
    import Logo from "$lib/Logo.svelte";
    import LogoError from "$lib/LogoError.svelte";
    import NavButton from "$lib/NavButton.svelte";
    import { page } from "$app/stores";
    let pages = ["about", "now", "projects", "photos"];

    import { onMount } from "svelte";

    onMount(() => {
        const nav = document.querySelector("#navbar");

        const menuButton = document.querySelector("#menuButton");
        const mobileMenu = document.querySelector("#mobileMenu");
        const overlayHTML =
            "<div id='overlay' class='h-screen w-screen fixed top-0 bottom-0 bg-gray-900 opacity-0 transition-opacity duration-300 ease-out' aria-hidden='true'></div>";
        let mobileMenuExpanded = false;

        function toggleMobileMenu() {
            if (!mobileMenuExpanded) {
                nav.insertAdjacentHTML("afterend", overlayHTML);
                const overlay = document.querySelector("#overlay");
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        overlay.classList.add("opacity-60");
                        overlay.classList.remove("opacity-0");
                        mobileMenu.classList.remove("translate-y-full");
                    });
                });
                overlay.addEventListener("click", toggleMobileMenu);
            } else {
                const overlay = document.querySelector("#overlay");
                overlay.classList.add("opacity-0");
                overlay.classList.remove("opacity-60");
                mobileMenu.classList.add("translate-y-full");
                overlay.addEventListener("transitionend", () => {
                    overlay.remove();
                });
            }
            toggleMenuButtonShape();
            mobileMenuExpanded = !mobileMenuExpanded;
        }

        menuButton.addEventListener("click", toggleMobileMenu);

        const mobileNavLinks = document.querySelector(".mobile-nav-links").childNodes;
        mobileNavLinks.forEach((link) => {
            link.addEventListener("click", toggleMobileMenu);
        })

        function toggleMenuButtonShape() {
            if (!mobileMenuExpanded) {
                menuButton.firstElementChild.classList.remove("-translate-y-1.5");
                menuButton.lastElementChild.classList.remove("translate-y-1.5");
                menuButton.firstElementChild.classList.add("rotate-45");
                menuButton.lastElementChild.classList.add("-rotate-45");
            } else {
                menuButton.firstElementChild.classList.add("-translate-y-1.5");
                menuButton.lastElementChild.classList.add("translate-y-1.5");
                menuButton.firstElementChild.classList.remove("rotate-45");
                menuButton.lastElementChild.classList.remove("-rotate-45");
            }
        }
    });
</script>

<svelte:body class:overflow-hidden={active} />

<div
    id="navbar"
    class="bg-white dark:bg-gray-850 border-gray-200 dark:border-gray-750
        shadow-[0_-2px_16px_-3px_rgba(0,0,0,0.05)]
        fixed bottom-0 md:sticky md:top-0 w-full border-t md:border-b md:bg-opacity-80 md:backdrop-blur-xl duration-150 ease-in-out z-50"
>
    <nav
        class="h-14 flex place-content-between items-center w-11/12 mx-auto max-w-[54rem] px-3 md:px-8"
        data-sveltekit-preload-data
    >
        <a href="/" class="w-20 sm:w-24 md:w-26 h-auto inline-block">
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
            id="menuButton"
            class="md:hidden h-4 cursor-pointer"
            aria-label="menu button"
        >
            <div class="h-0.5 w-6 bg-gray-800 dark:bg-gray-200 absolute -translate-y-1.5 transition-transform duration-100 ease-in-out"></div>
            <div class="h-0.5 w-6 bg-gray-800 dark:bg-gray-200 relative translate-y-1.5 transition-transform duration-100 ease-in-out"></div>
        </button>
    </nav>
</div>
<div
    id="mobileMenu"
    class="fixed bottom-14 w-full bg-white dark:bg-gray-850 border-t dark:border-gray-750 rounded-t-lg py-6 px-8 z-40 
    translate-y-full transition-transform duration-100 ease-in-out md:hidden"
>
    <div class="mobile-nav-links flex flex-col gap-2">
        {#each pages as page}
            <NavButton label={page} />
        {/each}
    </div>
</div>
