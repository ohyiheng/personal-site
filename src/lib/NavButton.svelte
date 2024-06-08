<script>
    export let label;
    import { page } from '$app/stores';
</script>

<a
    href="/{label}"
    class="font-medium text-primary-800 dark:text-gray-100 hover:text-secondary-500 dark:hover:text-secondary-400
         bg-white border dark:bg-gray-900
         border-gray-300 dark:border-gray-700 hover:border-secondary-500 dark:hover:border-secondary-400 rounded-sm
           py-[0.65rem] px-4
           flex-1
           hover:cursor-pointer
           active:translate-y-0 hover:-translate-y-[2px] transition-transform ease-in-out"
    aria-current={$page.url.pathname === `/${label}`}
    >{label}</a
>

<style>
    a[aria-current='true'] {
        @apply text-white bg-secondary-500 dark:bg-secondary-400
    }
</style>
