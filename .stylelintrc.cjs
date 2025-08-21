module.exports = {
	extends: ['stylelint-config-standard-scss'],
	plugins: ['stylelint-scss'],
	rules: {
		// Colors & alpha
		'color-hex-length': 'long',
		'color-function-notation': 'modern',
		'alpha-value-notation': 'percentage',

		// Fonts & Strings
		'font-family-name-quotes': 'always-where-recommended',
		'length-zero-no-unit': true,

		// Declarations
		'declaration-block-no-duplicate-properties': true,
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-no-shorthand-property-overrides': true,

		// Selectors
		'no-duplicate-selectors': true,
		'no-descending-specificity': true,
		'selector-no-qualifying-type': true,
		'selector-max-id': 0,
		'selector-max-class': 4,
		'max-nesting-depth': 4,

		// Vendor Prefixes
		'property-no-vendor-prefix': true,
		'value-no-vendor-prefix': true,

		// SCSS
		'scss/at-rule-no-unknown': true,
		'scss/at-import-partial-extension': 'never',
		'scss/at-mixin-pattern': '^[_a-z]+$',
		'scss/at-function-pattern': '^[_a-z]+$',
		'scss/dollar-variable-pattern': '^[_a-z]+$',
		'scss/no-duplicate-dollar-variables': true,
		'scss/no-global-function-names': true,
		'scss/selector-no-redundant-nesting-selector': true,

		// Overrides
		'at-rule-no-unknown': null,
		'custom-property-empty-line-before': null,
		'declaration-empty-line-before': null
	}
}
