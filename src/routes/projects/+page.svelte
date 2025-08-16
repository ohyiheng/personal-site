<script>
    import Title from "$lib/Title.svelte";
    import Body from "$lib/Body.svelte";
    import Link from "../../lib/Link.svelte";
    import ProjectItem from "../../lib/ProjectItem.svelte";
</script>

<Title
    >projects
    {#snippet caption()}
        <p>my personal software development projects</p>
    {/snippet}
</Title>
<Body width="normal">
    <div class="p-4 flex flex-col gap-12 mx-auto">
        <ProjectItem
            title="Tugas: Self-hostable Todo List Web App"
            start="Jun 2025"
            link="https://github.com/ohyiheng/tugas"
            tools={["Next.js", "React", "Docker", "Bash"]}
        >
            {#snippet description()}
                Tugas is a simple todo list app heavily inspired by Todoist. A
                demo instance is hosted <Link
                    href="https://tugas-demo.ohyiheng.com">here</Link
                >.
            {/snippet}
        </ProjectItem>
        <ProjectItem
            title="gust: get your songs tagged"
            start="Jun 2024"
            end="Jul 2025"
            link="https://github.com/ohyiheng/gust"
            tools={["Python"]}
        >
            {#snippet description()}
                gust lets you automatically tag your local music files using
                metadata from Spotify.
            {/snippet}
        </ProjectItem>
    </div>
</Body>
