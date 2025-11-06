import { DiscordIcon } from '@/shared/components/icons/DiscordIcon'
import { GithubIcon } from '@/shared/components/icons/GithubIcon'
import { MailIcon } from '@/shared/components/icons/MailIcon'
import { TelegramIcon } from '@/shared/components/icons/TelegramIcon'

export const contactsData = {
	icons: [
		{
			name: 'GitHub',
			url: 'https://github.com/nekithrill',
			icon: GithubIcon
		},
		{
			name: 'Discord',
			url: 'http://discord.com/users/342779325151444993',
			icon: DiscordIcon
		},
		{
			name: 'Telegram',
			url: 'https://t.me/nekithrill',
			icon: TelegramIcon
		},
		{
			name: 'Email',
			url: 'mailto:nekithrill@gmail.com',
			icon: MailIcon
		}
	]
}
