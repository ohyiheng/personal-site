<script>
    import Logo from "$lib/Logo.svelte";
    import LogoError from "$lib/LogoError.svelte";
    import NavButton from "$lib/NavButton.svelte";
    import { page } from "$app/stores";
    let pages = ["about", "now", "projects", "photos"];
</script>

<svelte:body class:overflow-hidden={active} />

<div
    class="bg-white dark:bg-gray-850 border-gray-200 dark:border-gray-750 py-3 sticky top-0 w-full border-b md:bg-opacity-80 md:backdrop-blur-xl z-20"
>
    <nav
        class="flex place-content-between items-center w-11/12 mx-auto max-w-[54rem] md:px-8"
        data-sveltekit-preload-data
    >
        <a href="/" class="w-20 sm:w-24 md:w-28 h-auto inline-block">
            {#if $page.error}
                <LogoError />
            {:else}
                <Logo />
            {/if}
        </a>

        <div class="flex gap-3 md:gap-4">
            {#each pages as page, i}
                <NavButton label={page} />
            {/each}
        </div>
    </nav>
</div>
