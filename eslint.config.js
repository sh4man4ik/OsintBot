import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: globals.browser },
		rules: {
			semi: ['error', 'always'],
			'no-unused-vars': 'warn',
			'no-undef': 'warn',
			'prefer-const': 'off'
		}
	}
]);
