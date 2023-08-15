<script lang="ts" strictEvents>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher<{
		chaaaaaaange: { value: string };
	}>();
	interface $$Slots {
		default: {
			favoriteFramework: string;
		};
	}
	export type Options = Readonly<
		{
			value: string;
			label: string;
		}[]
	>;
	type T = $$Generic<Options>;
	export let libraries: T;
	export let library: T[number]['value'];
</script>

<slot favoriteFramework="Svelte" />
<select
	on:change="{(e) =>
		dispatch('chaaaaaaange', {
			value: e.currentTarget.value,
		})}"
>
	{#each libraries as option}
		<option value="{option.value}" selected="{option.value === library}"
			>{option.label}</option
		>
	{/each}
</select>
