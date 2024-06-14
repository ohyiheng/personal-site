<script>
    import Link from "$lib/Link.svelte";
</script>

<h2>development environment</h2>
<div class="space-y-3">
    <p>
        I'm using
        <Link href={"https://code.visualstudio.com"}>Visual Studio Code</Link>
        as my primary text editor. Some useful extensions I have installed:
    </p>

    <ul class="pl-6 space-y-2 list-disc pb-12">
        <li>
            <strong>
                <Link
                    href={"https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server"}
                    >Live Preview
                </Link>
            </strong> to preview webpages directly in my editor, useful for when
            I only have one monitor.
        </li>
        <li>
            <strong>
                <Link
                    href={"https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits"}
                    >Conventional Commits
                </Link>
            </strong>to easily create commits that conform to the
            <Link href={"https://www.conventionalcommits.org/en/v1.0.0/"}
                >Conventional Commit Specification
            </Link>.
        </li>
        <li>
            <strong>
                <Link
                    href={"https://marketplace.visualstudio.com/items?itemName=alfredbirk.tailwind-documentation"}
                    >Tailwind Documentation
                </Link>
            </strong> to look up tailwind classes directly in my editor, super convenient.
        </li>
        <li>
            <strong>
                <Link
                    href={"https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph"}
                    >Git Graph
                </Link>
            </strong> to visualise the commit history of my git repository.
        </li>
    </ul>
</div>
