module.exports = {
	extends: ['stylelint-config-standard-scss'],
	plugins: ['stylelint-scss'],
	rules: {
		// empty lines between custom css variables
		'custom-property-empty-line-before': null,
		// empty lines in css
		'declaration-empty-line-before': null,
		'font-family-name-quotes': 'always-where-recommended',
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
		'scss/selector-no-redundant-nesting-selector': true
	}
}
