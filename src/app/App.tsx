import '@/app/config/i18n/i18n'
import '@/app/styles/globals.scss'
import TileGrid from '@/shared/components/tile/tile-grid/TileGrid'
import { getTilesData } from '@/shared/components/tile/TilesData'
import { Footer } from '@/widgets/footer/Footer'
import { Header } from '@/widgets/header/Header'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function App() {
	const { t } = useTranslation()
	const [activeTileIndex, setActiveTileIndex] = useState<number | null>(null)

	const tilesData = getTilesData(t)

	const handleTileClick = (index: number | null) => {
		setActiveTileIndex(index)
	}

	return (
		<div className='app'>
			<Header />
			<TileGrid
				tilesData={tilesData}
				activeTileIndex={activeTileIndex}
				onTileClick={handleTileClick}
			/>
			<Footer />
		</div>
	)
}
