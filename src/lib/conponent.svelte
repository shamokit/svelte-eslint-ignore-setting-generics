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

<!--
@component

```html
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
```

```tsx
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
```
-->
