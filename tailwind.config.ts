import type { Config } from 'tailwindcss';
import natcore from '@natcore/design-system-core/src/plugin';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [natcore()]
} satisfies Config;
