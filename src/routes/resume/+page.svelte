<script>
    import Title from "$lib/Title.svelte";
    import Body from "$lib/Body.svelte";
    import Link from "../../lib/Link.svelte";
    import ProjectItem from "../../lib/ProjectItem.svelte";
</script>

<Title
    >resume
    {#snippet caption()}
        <div class="flex gap-1 justify-center items-center flex-wrap whitespace-nowrap">
            <p>download my resume in PDF format:</p>
            <div>
                <Link href="/resume/resume-ohyiheng.pdf" download>[Without Portrait]</Link> or
                <Link href="/resume/resume-ohyiheng-withportrait.pdf" download>[With Portrait]</Link>
            </div>
        </div>
    {/snippet}
</Title>
<Body width="normal">
    <div class="p-4 space-y-12">
        <h2 class="mb-4">Education</h2>
        <hr class="mb-6 border-gray-500" />
        <div class="space-y-1">
            <p><strong>University Tunku Abdul Rahman (UTAR)</strong></p>
            <div class="flex justify-between">
                <p>Bachelor of Computer Science (Honours)</p>
                <p>Graduation: Jan 2027</p>
            </div>
            <p>Current CGPA: 3.73/4.00</p>
            <p><strong>Internship Period:</strong> 19 Oct 2026–16 Jan 2027 (3 months)</p>
        </div>
        <h2 class="mb-4">Skills</h2>
        <hr class="mb-6 border-gray-500" />
        <div class="space-y-1">
            <p><strong>Programming Languages:</strong> JavaScript, TypeScript, Java, Kotlin, Python</p>
            <p><strong>Frameworks & Libraries:</strong> React, Next.js, Svelte, Jetpack Compose, Tailwind CSS</p>
            <p><strong>Other Skills:</strong> Git, Docker, Linux, AWS, SQL, HTML/CSS</p>
        </div>
        <h2 class="mb-4">Projects</h2>
        <hr class="mb-6 border-gray-500" />
        <div class="flex flex-col gap-6 mx-auto">
            <ProjectItem
                title="Linux Home Lab"
                start="2024"
                end="Present"
                tools={["Linux", "Docker Compose", "Cloudflare"]}
                descriptions={[
                    "Self-built and managed a Debian Linux server that has been running for 2 years",
                    "Hosted 20+ services including media servers, a file server, and a photo library used by family with hourly backups to multiple locations",
                    "Set up Tailscale VPN to enable secure remote access and bypass CGNAT",
                ]}
            >
            </ProjectItem>
            <ProjectItem
                title="gust: get your songs tagged"
                start="Jun 2024"
                end="Jul 2025"
                link="https://github.com/ohyiheng/gust"
                tools={["Python"]}
                descriptions={[
                    "Developed a program to automatically tag local music files using metadata retrieved from Spotify",
                    "Significantly reduced time needed to manually tag music files"
                ]}
            >
            </ProjectItem>
            <ProjectItem
                title="Personal Website"
                tools={["SvelteKit"]}
                descriptions={[
                    "Made a personal website to showcase my projects and photos",
                    "Wrote API calls to last.fm to show my top 6 most played albums of the last 7 days",
                    "Integrated Sanity CMS to easily update website content"
                ]}
            >
            </ProjectItem>
        </div>
        <h2 class="mb-4">Relevant Experience</h2>
        <hr class="mb-6 border-gray-500" />
        <div class="space-y-1">
            <ProjectItem
                title="Hack Attack Hackathon"
                start="Aug 2024"
                link="https://hackattack.ohyiheng.com"
                descriptions={[
                    "Shortlisted into the final round",
                    "Developed a Malaysia travel planner prototype using Google's Places API"
                ]}
            >
            </ProjectItem>
        </div>
    </div>
</Body>
