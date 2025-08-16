<script>
    import Link from "./Link.svelte";
    let { title, description, start, end, link, tools } = $props();
</script>

<div>
    <div class="flex justify-between items-center mb-3">
        <Link href={link}>
            <h3 class="mb-0">{title}</h3>
        </Link>
        <p>
            {start}&ndash;{end ? end : "Present"}
        </p>
    </div>
    <p class="mb-3">
        {@render description()}
    </p>
    {#if tools}
        <hr class="mb-2" />
        <p class="text-sm">
            {tools.join(" • ")}
        </p>
    {/if}
</div>
