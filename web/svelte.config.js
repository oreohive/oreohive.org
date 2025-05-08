import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
        extensions: ['.md', '.svx'],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
        // Consult https://svelte.dev/docs/kit/integrations
        // for more information about preprocessors
        preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

        kit: {
                // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
                // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
                // See https://svelte.dev/docs/kit/adapters for more information about adapters.
                adapter: adapter(),
                alias: {
                        $components: "src/components",
                        $lib: "src/lib",
                        $utils: "src/lib/utils",
                        $icons: "static/icons",
                        $icons_md4: "static/icons/material-design-icons-4.0.0/android",
                },
                prerender: {
                        handleHttpError: 'ignore'
                },
                },
        }

export default config;
