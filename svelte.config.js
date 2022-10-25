import sveltePreprocess from 'svelte-preprocess';
import typescript from 'svelte-preprocess';
import sass from 'svelte-preprocess';
import scss from 'svelte-preprocess';

export default {
	resolve: {
		alias: {
			'./runtimeConfig': './runtimeConfig.browser',
		},
	},
  preprocess: [
		typescript(),
    sveltePreprocess(),
		sass(),
		scss()
  ],
	vitePlugin: {
		disableDependencyReinclusion: ['@roxi/routify']
	}
}
