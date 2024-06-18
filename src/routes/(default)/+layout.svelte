<script>
    import "/src/app.css";
</script>

<div class="flex flex-col flex-grow">
    <div
        class="w-[90vw] max-w-[60ch] mx-auto md:border-x md:px-8 pt-12 pb-14 border-gray-200 dark:border-gray-750 flex-grow"
    >
        <slot />
    </div>
</div>
