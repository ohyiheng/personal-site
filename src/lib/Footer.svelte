<script>
    import LogoGithub from "$lib/LogoGithub.svelte";
    import LogoLinkedin from "$lib/LogoLinkedin.svelte";
    import IconMail from "$lib/IconMail.svelte";
    import Link from "$lib/Link.svelte";
</script>

<div
    class="text-gray-400 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center flex flex-col gap-4 pt-10 pb-8"
>
    <div class="font-sans text-sm flex items-center justify-center gap-4">
        <a href="https://github.com/ohyiheng" target="_blank">
            <LogoGithub />
        </a>
        <a
            href="https://www.linkedin.com/in/yi-heng-oh-646454313/"
            target="_blank"
        >
            <LogoLinkedin />
        </a>
        <a href="mailto:oh@yhng.me" target="_blank">
            <IconMail />
        </a>
    </div>
    <p class="text-sm">
        Icons by <Link href={"https://feathericons.com/"}>Feather</Link>
    </p>
</div>

<style>
    a {
        @apply w-6 hover:text-secondary-500 duration-150;
    }
</style>
