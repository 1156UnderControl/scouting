<script>
	let scoops = 1;
</script>

<ul class="flex items-center rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x divide-gray-200 dark:divide-gray-600">
    <label class="p-3">
        <input type="radio" bind:group={scoops} value={1}/>
        Engaged
    </label>
    <label class="p-3">
        <input type="radio" bind:group={scoops} value={2}/>
        Docked
    </label>
    <label class="p-3">
        <input type="radio" bind:group={scoops} value={3}/>
        Park
    </label>
</ul>
