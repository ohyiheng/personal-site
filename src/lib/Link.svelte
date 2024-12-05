<script>
    let { href, newTab, children } = $props();
</script>

{#if newTab}
    <a
        href={href}
        class="underline underline-offset-4 decoration-transparent hover:decoration-secondary-500 dark:hover:decoration-secondary-300 text-secondary-500 dark:text-secondary-300"
        target="_blank"
        >{@render children?.()}
    </a>
{:else}
    <a
        href={href}
        class="underline underline-offset-4 decoration-transparent hover:decoration-secondary-500 dark:hover:decoration-secondary-300 text-secondary-500 dark:text-secondary-300"
        >{@render children?.()}
    </a>
{/if}
