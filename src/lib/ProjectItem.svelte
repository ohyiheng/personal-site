<script>
    import Link from "./Link.svelte";
    let { title, descriptions, start, end, link, tools } = $props();
</script>

<div>
    <div class="flex justify-between items-center mb-3">
    {#if link}
        <Link href={link}>
            <h3 class="mb-0">{title}</h3>
        </Link>
    {:else}
        <h3 class="mb-0">{title}</h3>
    {/if}
        <p>
            {start}{end ? `–${end}` : ""}
        </p>
    </div>
    <div class="mb-3">
        <ul class="list-disc pl-6">
            {#each descriptions as description}
                <li>{description}</li>
            {/each}
        </ul>
    </div>
    {#if tools}
        <p class="text-sm">
            <i class="pr-1.5">Tools used:</i>{tools.join(" • ")}
        </p>
    {/if}
</div>
