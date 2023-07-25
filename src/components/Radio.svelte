<script lang="ts">

	type Option = {
		value: string;
		label: string;
	};

	export let options: Option[];
	export let legend: string;
	export let userSelected = options[0].value;

	const uniqueID = Math.floor(Math.random() * 100);

	const slugify = (str = '') => str.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
</script>

<div
	role="radiogroup"
	aria-labelledby={`label-${uniqueID}`}
	id={`group-${uniqueID}`}
>
<div class="" id={`label-${uniqueID}`}>{legend}</div>
	{#each options as { value, label }}
		<ul class="w-32 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white my-8">
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-60">
    	<div class="flex items-center pl-3">
				<input class="w-4 h-4 text-blue-800 bg-gray-100 border-gray-300 focus:ring-blue-800 dark:focus:ring-blue-800 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-900 dark:border-gray-500" type="radio" id={slugify(label)} bind:group={userSelected} {value}>
				<label for={slugify(label)} class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> {label} </label>
      </div>
    </li>
		</ul>
	{/each}
</div>

