<script>
    export let href, newTab;
</script>

{#if newTab}
    <a
        href={href}
        class="underline underline-offset-4 decoration-transparent hover:decoration-secondary-500 dark:hover:decoration-secondary-300 text-secondary-500 dark:text-secondary-300"
        target="_blank"
        ><slot/>
    </a>
{:else}
    <a
        href={href}
        class="underline underline-offset-4 decoration-transparent hover:decoration-secondary-500 dark:hover:decoration-secondary-300 text-secondary-500 dark:text-secondary-300"
        ><slot />
    </a>
{/if}
