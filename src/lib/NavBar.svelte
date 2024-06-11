<script>
    import Logo from "$lib/Logo.svelte";
    import LogoError from "$lib/LogoError.svelte";
    import NavButton from "$lib/NavButton.svelte";
    import { page } from '$app/stores';
</script>

<div class="bg-white-100 dark:bg-gray-850">
    <nav class="text-center w-11/12 pb-8 mx-auto md:w-4/5 xl:w-3/5">
        <a href="/" class="w-24 sm:w-28 md:w-32 h-auto inline-block mx-auto mt-6 mb-5">
            {#if $page.error}
            <LogoError />
            {:else}
            <Logo />
            {/if}
        </a>
    
        <div class="flex flex-wrap gap-3">
            <NavButton label={"about"} />
            <NavButton label={"now"} />
            <NavButton label={"photos"} />
            <NavButton label={"uses"} />
        </div>
    </nav>
</div>
