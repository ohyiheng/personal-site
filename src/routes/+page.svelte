<script>
    import NavButton from "./NavButton.svelte";
</script>

<div>
    <logo>yiheng</logo>
    <p>
        Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>

    <NavButton text={"now"} />
</div>

<style>
    logo {
        font-family: var(--font-serif);
    }
    div {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        align-items: left;
    }
</style>
