<script>
    export let width;
</script>

<div class="flex flex-col flex-grow">
    <div
        class="w-[90vw] mx-auto md:border-x md:px-8 pt-12 pb-14 border-gray-200 dark:border-gray-750 flex-grow"
        class:max-w-[60ch]={width === 'narrow'}
        class:max-w-[70ch]={width === 'normal'}
        class:max-w-[90ch]={width === 'wide'}
        class:max-w-[90vw]={width === 'full'}
    >
        <slot />
    </div>
</div>