<script>
    export let label;
    import { page } from "$app/stores";
</script>

<a
    href="/{label}"
    class="text-base font-medium font-display border-b-2 border-transparent
        text-gray-750 dark:text-gray-150 hover:text-secondary-500 dark:hover:text-secondary-400 dark:hover:border-secondary-400
           flex-1
           hover:cursor-pointer
           aria-[current=true]:border-secondary-500 dark:aria-[current=true]:border-secondary-400
           hover:border-b-2 hover:border-secondary-500 
           transition-transform duration-200 ease-out
           hover:-rotate-3"
    aria-current={$page.url.pathname === `/${label}`}>{label}</a
>