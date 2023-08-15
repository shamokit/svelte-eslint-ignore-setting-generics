<script lang="ts" strictEvents>
	import Component from '../lib/conponent.svelte';
	const libraries = [
		{
			value: 'eslint',
			label: 'ESLint',
		},
		{
			value: 'eslint-plugin-svelte',
			label: 'eslint-plugin-svelte',
		},
	] as const;
	const defaultLibrary = 'eslint';
	let selectedValue = defaultLibrary;
</script>

<h1>Welcome to SvelteKit</h1>
<Component
	libraries="{libraries}"
	library="{defaultLibrary}"
	let:favoriteFramework
	on:chaaaaaaange="{({ detail: { value: _value } }) => (selectedValue = _value)}"
>
	<p>
		{favoriteFramework}はいいぞ
	</p>
	<hr />
	<p>Selected library is {selectedValue}</p>
</Component>
