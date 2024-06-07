<script>
    import Logo from "$lib/Logo.svelte";
    import NavButton from "$lib/NavButton.svelte";
</script>

<nav class="text-center w-11/12 mx-auto mb-8 md:w-4/5 xl:w-3/5">
    <a href="/" class="w-36 h-auto inline-block mx-auto mt-6 mb-5">
        <Logo />
    </a>

    <div class="flex flex-wrap gap-3">
        <NavButton label={"about"} link={"/about"} />
        <NavButton label={"now"} link={"/now"} />
        <NavButton label={"photos"} link={"/photos"} />
        <NavButton label={"uses"} />
    </div>
</nav>