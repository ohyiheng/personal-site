<script>
    import { createBubbler, preventDefault } from 'svelte/legacy';

    const bubble = createBubbler();
    import Title from "$lib/Title.svelte";
    import Body from "$lib/Body.svelte";
</script>

<Title>hi there! i'm yiheng</Title>

<Body width="normal">
    <div class="flex items-center gap-2 pb-4">
        <img
            src="/avatar.jpg"
            alt="a headshot of me"
            class="rounded-full h-10"
            oncontextmenu={preventDefault(bubble('contextmenu'))}
        />
        <h2 class="m-0">welcome to my website</h2>
    </div>
    <p class="pb-4">I'm a student developer based in Malaysia who:</p>
    <ul class="pl-6 space-y-2 list-disc pb-12">
        <li>currently pursues a computer science degree in UTAR Kampar</li>
        <li>loves photography</li>
        <li>loves sports, especially badminton</li>
        <li>can sometimes be overly competitive</li>
        <li>likes journalling but does it on a very inconsistent basis</li>
        <li>enjoys writing but is not very good at it</li>
        <li>likes designing but is very bad at drawing</li>
        <li>enjoys solving Rubik's cubes and puzzles</li>
    </ul>
</Body>
