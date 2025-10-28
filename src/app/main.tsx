import App from '@/app/App'
import React from 'react'
import { createRoot } from 'react-dom/client'

const root = document.getElementById('root')
if (!root) throw new Error('No root element found')

createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
