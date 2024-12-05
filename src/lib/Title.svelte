<script>
    let {
        left,
        wide,
        children,
        caption,
        date,
        tags
    } = $props();
</script>

<header
    class="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-750"
>
    <div
        class="w-[90vw] mx-auto md:px-8 pt-16 py-12"
        class:max-w-[90ch]={wide}
        class:max-w-[70ch]={!wide}
    >
        <div class="flex flex-col" class:items-center={!left}>
            <h1 class="font-display font-bold pb-3" id="title">{@render children?.()}</h1>
            {#if left}
            <div
                class="flex flex-col gap-5 text-sm text-gray-600 dark:text-gray-400 place-content-between justify-center"
            >
                {@render caption?.()}
                {#if caption && (date || tags)}
                    <hr class="border-gray-250 dark:border-gray-750" />
                {/if}
                <div class="flex gap-3">
                    {@render date?.()}
                    {#if date && tags}
                        <span aria-hidden="true">•</span>
                    {/if}
                    {@render tags?.()}
                </div>
            </div>
            {:else}
            <div
                class="text-sm text-gray-600 dark:text-gray-400 text-center"
            >
            {@render caption?.()}
            </div>
            {/if}
        </div>
    </div>
</header>
