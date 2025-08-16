<script>
    let { href, newTab, children } = $props();
</script>

<a
    {href}
    class="underline underline-offset-4 decoration-transparent hover:decoration-secondary-500 dark:hover:decoration-secondary-300 text-secondary-500 dark:text-secondary-300"
    target={newTab ? "_blank" : "_self"}
    >{@render children?.()}
</a>
