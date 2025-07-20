import { Footer } from '@/widgets/footer/Footer'
import { Header } from '@/widgets/header/Header'
import { ReactNode } from 'react'

interface LayoutProps {
	children: ReactNode
}

export function MainLayout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
