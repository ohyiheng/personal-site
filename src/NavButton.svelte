<script>
    export let label;
</script>

<button>{label}</button>

<style>
    button {
        padding: 0.65em 1em;
        min-width: 8rem;
        color: var(--text-invert);
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
        color: var(--text-white);
        cursor: pointer;
        transform: translateY(-4px);
        transition: transform 150ms ease-in-out;
    }
</style>
