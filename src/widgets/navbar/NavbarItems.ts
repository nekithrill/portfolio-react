import { AboutIcon } from '@/shared/components/icons/AboutIcon'
import { ContactsIcon } from '@/shared/components/icons/ContactsIcon'
import { HomeIcon } from '@/shared/components/icons/HomeIcon'
import { ProjectsIcon } from '@/shared/components/icons/ProjectsIcon'
import { SkillsIcon } from '@/shared/components/icons/SkillsIcon'

export const navItems = [
	{
		path: '/',
		labelKey: 'menu.home',
		Icon: HomeIcon
	},
	{
		labelKey: 'menu.about',
		path: '/about',
		Icon: AboutIcon
	},
	{
		labelKey: 'menu.skills',
		path: '/skills',
		Icon: SkillsIcon
	},
	{
		labelKey: 'menu.projects',
		path: '/projects',
		Icon: ProjectsIcon
	},
	{
		labelKey: 'menu.contacts',
		path: '/contacts',
		Icon: ContactsIcon
	}
]
