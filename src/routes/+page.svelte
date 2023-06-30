<script lang="ts">
	import NumberInput from '../components/desktop/NumberInput.svelte';
	import Switch from '../components/Switch.svelte';
	import NumberInputMobile from '../components/mobile/NumberInput.svelte';
	import Radio from '../components/Radio.svelte';

	let testeNumber: number;
	let testeNumberMobile: number;
	let testeSwitch: boolean;
	let radioValue: string;

	const options = [
		{
			value: 'green',
			label: 'Bulbasaur'
		},
		{
			value: 'red',
			label: 'Charmander'
		},
		{
			value: 'blue',
			label: 'Squirtle'
		}
	];
</script>

<h1>Teste</h1>

<hr />

<NumberInput max={5} bind:value={testeNumber} />
<p>Value is {testeNumber}</p>

<hr />

<Switch bind:checked={testeSwitch} />
<p>Value is {testeSwitch}</p>

<hr />

<NumberInputMobile max={5} bind:value={testeNumberMobile} />
<p>Value is {testeNumberMobile}</p>

<hr />

<Radio {options} fontSize={16} legend="Select a starter Pokemon" bind:userSelected={radioValue} />
<p>
	{radioValue} is selected
</p>
