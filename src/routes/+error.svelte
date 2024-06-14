<script>
	import { page } from "$app/stores";
</script>

<div class="flex flex-col flex-grow">
	<div
		class="w-[90vw] max-w-[54rem] mx-auto md:border-x md:px-8 pt-12 pb-14 border-gray-200 dark:border-gray-700 flex-grow"
	>
		<h1 class="text-center">{$page.status}: {$page.error.message}</h1>
	</div>
</div>
