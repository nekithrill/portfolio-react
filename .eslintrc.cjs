module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	parserOptions: {
		ecmaFeatures: { jsx: true },
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	plugins: [
		'react',
		'react-refresh',
		'react-hooks',
		'@typescript-eslint',
		'@eslint-react'
	],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': 'warn',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true }
		]
	}
}
