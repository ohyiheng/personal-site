<script>
    export let text;
</script>

<button>{text}</button>

<style>
    button {
        padding: 1em 5em;
        color: #fff;
        background-color: var(--accent);
        border: none;
        border-radius: .2rem;
        font-size: 1rem;
        font-family: var(--font-sans);
        font-weight: 500;
    }
</style>