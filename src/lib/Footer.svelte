<script>
    import LogoGithub from "$lib/LogoGithub.svelte";
    import LogoLinkedin from "$lib/LogoLinkedin.svelte";
    import LogoLastFM from "$lib/LogoLastFM.svelte";
    import LogoLetterboxd from "$lib/LogoLetterboxd.svelte";
    import IconMail from "$lib/IconMail.svelte";
</script>

<div
    class="text-gray-400 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-750 text-center flex flex-col sm:flex-row justify-center items-center gap-4 py-12"
>
    <p>Find me on other places:</p>
    <div class="font-sans text-sm flex items-center justify-center gap-4">
        <a href="mailto:mail@ohyiheng.com" target="_blank">
            <IconMail />
        </a>
        <a href="https://github.com/ohyiheng" target="_blank">
            <LogoGithub />
        </a>
        <a
            href="https://www.linkedin.com/in/ohyiheng/"
            target="_blank"
        >
            <LogoLinkedin />
        </a>
        <a href="https://www.last.fm/user/rainmrn" target="_blank">
            <LogoLastFM />
        </a>
        <a href="https://www.letterboxd.com/rainmrn/" target="_blank">
            <LogoLetterboxd />
        </a>
    </div>
</div>

<style>
    a {
        @apply w-6 hover:text-secondary-500;
    }
</style>
