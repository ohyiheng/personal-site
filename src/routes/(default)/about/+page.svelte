<script>
    import Link from "$lib/Link.svelte";
    import { jsonPath } from "@sanity/client/csm";
</script>

<div class="space-y-4 pb-12">
    <p>
        I've always wanted to have my own website, having built a couple ones in
        the past, I should have the basic skills under my belt. Building a
        simple, static website shouldn't be hard, it doesn't require much
        programming skills, if at all, but I always end up letting perfectionism
        getting the better of me.
    </p>

    <p>
        I always picture my website getting traffic from people over the world,
        thinking I should build something that will impress them. Looking at
        websites built by other talented developers as an inspiration didn't
        help either, it only made me feel like I would never be able to build
        something as good as theirs.
    </p>

    <p>
        At the end of the day, my website is probably just going to go down as a
        single node that exists in a sea of other interconnected nodes which,
        form a large network called the World Wide Web, except my node would be
        barely connected to other nodes, if at all. But I guess I'm fine with
        that, I just want to have a spot and be a part of the web, and have
        someplace I can call home.
    </p>
    <p>And this is it, this is my webpage, I hope you enjoy your visit.</p>
    <hr class="border-gray-200 dark:border-gray-750" />
    <p>
        If you're reading this and you still don't have a website, read <Link
            href={"https://www.zinzy.website/2023/04/26/dear-nienke-you-should-have-a-website/"}
            >why you should have one</Link
        >!
    </p>
</div>

<h3>technologies underneath</h3>

<div class="space-y-4">
    <p>
        This site is built with the awesome Javascript framework
        <Link href={"https://kit.svelte.dev"}>Sveltekit</Link>. I used the
        <Link href={"https://photoswipe.com"}>Photoswipe</Link> library for the lightbox
        gallery feature on my
        <Link href={"/photos"}>photos</Link> page.
    </p>
    <p>
        You can find the source code on my
        <Link href={"https://github.com/ohyiheng/personal-site"}>github repo</Link>.
    </p>
</div>
