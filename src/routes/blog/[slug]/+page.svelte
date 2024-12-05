<script>
    import Title from '$lib/Title.svelte';
    import Body from '$lib/Body.svelte';
    let { data } = $props();
</script>

<Title left>{data.title}
    {#snippet caption()}
        <p >{data.caption}</p>
    {/snippet}
    {#snippet date()}
        <p >{data.date}</p>
    {/snippet}
</Title>

<Body width="normal">
    <div class="space-y-8 mb-8">
        <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Sagittis massa ullamcorper elementum interdum arcu justo integer ornare? Sit eleifend ac lobortis fringilla ultrices dictum. Himenaeos scelerisque lacus, volutpat sagittis nostra purus montes. Pellentesque egestas diam justo mollis sagittis pulvinar penatibus amet arcu. Dapibus fusce aliquam egestas molestie pretium aliquam pharetra aliquam. Malesuada nibh nascetur ligula congue varius curae tempus. Tincidunt eleifend maecenas aliquam sem platea curae.
        </p>
        
        <p>Fames class vel ultrices velit facilisis dis urna. Habitasse suspendisse turpis dignissim imperdiet conubia facilisi consectetur. Dui erat odio donec fusce enim velit auctor sapien. Aliquet penatibus ligula semper finibus faucibus commodo netus. Augue venenatis per fermentum cras fringilla posuere. Lacus consequat ligula enim elementum sodales justo eleifend bibendum venenatis.</p>
        
        <p>Interdum quis lacus natoque, semper neque facilisis elementum sodales. Varius sollicitudin curabitur proin nostra pellentesque montes pharetra. Est consequat sed feugiat at elementum. Mauris interdum commodo efficitur ullamcorper aenean mattis erat. Inceptos porta fusce vehicula id a proin habitant torquent tincidunt. Habitant tellus luctus quam turpis adipiscing potenti laoreet. Quis imperdiet sapien donec mollis litora facilisi taciti tortor. Facilisis purus faucibus aliquet placerat hac sagittis inceptos. Tortor fringilla fringilla nullam eros laoreet risus mattis sit scelerisque.</p>
    </div>
    
</Body>

