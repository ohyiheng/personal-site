<script>
    export let text;
</script>

<button>{text}</button>

<style>
    button {
        padding: 0.65em 1em;
        min-width: 8rem;
        color: var(--neutral);
        background-color: var(--primary);
        border: none;
        border-radius: 0.1rem;
        font-size: 1rem;
        font-family: var(--font-sans);
        font-weight: 500;
        flex: 1;
    }

    button:hover {
        background-color: var(--accent);
        color: white;
        cursor: pointer;
        transform: translateY(-4px);
        transition: transform 150ms ease-in-out;
    }
</style>
