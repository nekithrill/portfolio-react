import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	base: '/',
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	server: {
		port: Number(process.env.VITE_PORT) || 3000,
		host: true,
		watch: {
			usePolling: true
		}
	}
})
