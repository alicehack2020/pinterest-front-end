export const env = {
	browser: true,
	es2021: true,
};
export const extend = ['plugin:react/recommended', 'eslint:recommended'];
export const overrides = [];
export const parserOptions = {
	ecmaVersion: 'latest',
	sourceType: 'module',
};
export const plugins = ['react'];
export const rules = {
	semi: ['error', 'always'],
	quotes: ['error', 'single'],
};
