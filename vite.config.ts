import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';
const projectRootDir = resolve(__dirname);

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
				'$root': resolve(projectRootDir, ''),
		},
},
});
