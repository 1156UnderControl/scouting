<script lang="ts">
	import NumberInput from '../components/desktop/NumberInput.svelte';
	import Switch from '../components/Switch.svelte';
	import NumberInputMobile from '../components/mobile/NumberInput.svelte';
	import Radio from '../components/Radio.svelte';
	import Dropdown from '../components/Dropdown.svelte'

	import RadioCharge from '../components/RadioCharge.svelte'

	let testeNumber: number;
	let testeNumberMobile: number;
	let testeSwitch: boolean;
	let radioValue: string;
</script>

<!-- mobile view -->

<h1 class='flex justify-center text-5xl bg-blue-800 text-white p-8'>Under Control 1156 - Scouting</h1>


<section class='flex justify-center my-6'>
	<p class='p-2'>TEAM:</p><NumberInput max={10000} bind:value={testeNumber}/>
	<Dropdown/>
	<!-- <p>Team number: {testeNumber}</p> -->
</section>

<hr>

<h1 class='p-4 text-xl font-semibold'>Autônomo</h1>
<section>
	<div class='flex flex-nowrap justify-center pb-4'>
		<p class='mr-6'>O robô saiu da COMMUNITY?</p>
		<Switch bind:checked={testeSwitch}/> <!-- <p>Value is {testeSwitch}</p> -->
	</div>
	<div class='justify-center flex space-x-16'>
		<p>HIGH</p>
		<p>MID</p>
		<p>LOW</p>
	</div>	
	<div class='flex flex-nowrap justify-center flex space-x-11 pb-6'>
		<NumberInputMobile max={5} bind:value={testeNumberMobile}/>
		<NumberInputMobile max={5} bind:value={testeNumberMobile}/>
		<NumberInputMobile max={5} bind:value={testeNumberMobile}/>
		<!-- <p>Value is {testeNumberMobile}</p> -->
	</div>
	<div class='flex justify-center pb-6 pt-4'>
		<RadioCharge/>
	</div>
</section>

<hr>

<h1 class='p-4 text-xl font-semibold'>Teleoperado</h1>
<section>
	<p class='flex justify-center pb-3 text-xl'>Cones</p>
	<div class='justify-center flex space-x-16'>
		<p>HIGH</p>
		<p>MID</p>
		<p>LOW</p>
	</div>
	<div class='flex flex-nowrap justify-center flex space-x-11 pb-6'>
		<NumberInputMobile max={5} bind:value={testeNumberMobile}/>
		<NumberInputMobile max={5} bind:value={testeNumberMobile}/>
		<NumberInputMobile max={5} bind:value={testeNumberMobile}/>
		<!-- <p>Value is {testeNumberMobile}</p> -->
	</div>
	<p class='flex justify-center pb-3 text-xl'>Cubos</p>
	<div class='justify-center flex space-x-16'>
		<p>HIGH</p>
		<p>MID</p>
		<p>LOW</p>
	</div>
	<div class='flex flex-nowrap justify-center flex space-x-11 pb-6'>
		<NumberInputMobile max={5} bind:value={testeNumberMobile}/>
		<NumberInputMobile max={5} bind:value={testeNumberMobile}/>
		<NumberInputMobile max={5} bind:value={testeNumberMobile}/>
		<!-- <p>Value is {testeNumberMobile}</p> -->
	</div>
	<div class='flex justify-center pb-6 pt-4'>
		<RadioCharge/>
	</div>
</section>

<hr>

<h1 class='p-4 text-xl font-semibold'>Outros</h1>
<section>
	<div class='flex justify-center pb-4'>
		<p class='p-2 '>Faltas:</p><NumberInput max={10000} bind:value={testeNumber}/>
	</div>
	<div class='flex flex-nowrap justify-center pb-4'>
		<p class='mr-6'>O robô jogou como defesa?</p>
		<Switch bind:checked={testeSwitch}/> <!-- <p>Value is {testeSwitch}</p> -->
	</div>
	<div class='flex flex-nowrap justify-center'>
		<p class='mr-6'>O robô pifou?</p>
		<Switch bind:checked={testeSwitch}/> <!-- <p>Value is {testeSwitch}</p> -->
	</div>
	<div>
		<h1 class='pl-4 pb-4 text-xl'>Comentários:</h1>
		<div class="mb-6 flex justify-center">
			<input type="text" id="large-input" class="mx-4 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
		</div>
	</div>
</section>

<hr>

<h1 class='pl-4 pb-4 pt-6 text-xl'>Scouter:</h1>
<div class="mb-6 flex justify-center">
	<input type="text" id="large-input" class="mx-4 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
	 <button type="submit" class=" mr-4 inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-800 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Enviar
    </button>
</div>


<!-- Radio para usar com a API do TBA -->
<!-- <Radio {options} fontSize={16} legend="Charge" bind:userSelected={radioValue} /> -->
<!-- <p>{radioValue} is selected</p> -->
