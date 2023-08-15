module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	rules: {
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				"argsIgnorePattern": "(^[$]{2}(Slots|Events|Props|Generic))|^_",
				"varsIgnorePattern": "(^[$]{2}(Slots|Events|Props|Generic))|^_",
				"caughtErrorsIgnorePattern": "(^[$]{2}(Slots|Events|Props|Generic))|^_",
				"destructuredArrayIgnorePattern": "(^[$]{2}(Slots|Events|Props|Generic))|^_"
			}
		],
		'svelte/experimental-require-slot-types': "error",
		'svelte/experimental-require-strict-events': "error"
	},
	globals: {
		"$$Generic": true
	},
};
