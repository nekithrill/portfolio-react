import { ReactNode } from 'react'

export interface ProjectData {
	title: string
	subtitle?: string
	content?: string | ReactNode
	image?: string
	footer?: string | ReactNode
	icon?: ReactNode
}

export const projectsData: ProjectData[] = [
	{
		title: 'Portfolio Website',
		subtitle: 'React, TypeScript, SCSS',
		content: 'Личный сайт с проектами, блогом и резюме.',
		image: '/src/shared/assets/images/portfolio.png',
		footer: 'Live Demo →',
		icon: null
	},
	{
		title: 'Task Manager',
		subtitle: 'Vue.js, Vuex',
		content: 'Веб-приложение для управления задачами с drag-and-drop.',
		image: '/src/shared/assets/images/task-manager.png',
		footer: 'Live Demo →',
		icon: null
	},
	{
		title: 'Portfolio Website',
		subtitle: 'React, TypeScript, SCSS',
		content: 'Личный сайт с проектами, блогом и резюме.',
		image: '/src/shared/assets/images/portfolio.png',
		footer: 'Live Demo →',
		icon: null
	},
	{
		title: 'Task Manager',
		subtitle: 'Vue.js, Vuex',
		content: 'Веб-приложение для управления задачами с drag-and-drop.',
		image: '/src/shared/assets/images/task-manager.png',
		footer: 'Live Demo →',
		icon: null
	}
]
