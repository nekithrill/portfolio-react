import { IconWrapper } from '@/shared/components/icons/icon-wrapper/IconWrapper'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { navItems } from './Navbar.types'

export default function Navbar() {
	const { t } = useTranslation()

	return (
		<nav className={styles['navbar']}>
			{navItems.map(item => {
				const Icon = item.Icon
				return (
					<NavLink
						key={item.path || item.labelKey}
						to={item.path}
						className={({ isActive }) =>
							isActive ? styles['activeLink'] : styles['link']
						}
						end
					>
						{Icon && (
							<IconWrapper size={24} className={styles['icon']}>
								<Icon />
							</IconWrapper>
						)}
						{t(item.labelKey)}
					</NavLink>
				)
			})}
		</nav>
	)
}
