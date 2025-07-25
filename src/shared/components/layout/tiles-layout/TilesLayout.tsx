import { Tile } from '@/widgets/сontent-tile/Tile'
import { tileData } from '@/widgets/сontent-tile/TIleData'
import { useState } from 'react'
import styles from './TilesLayout.module.scss'

export function TilesLayout() {
	const [activeTileId, setActiveTileId] = useState<string | null>(null)

	const handleOpen = (id: string) => {
		setActiveTileId(id)
	}

	const handleClose = () => {
		setActiveTileId(null)
	}

	return (
		<main className={styles['main-content']}>
			{tileData.map(({ id, ...tileProps }) => {
				const isActive = activeTileId === id

				return (
					<Tile
						id={id}
						{...tileProps}
						isActive={isActive}
						isHidden={activeTileId !== null && !isActive}
						onOpen={() => handleOpen(id)}
						onClose={handleClose}
					/>
				)
			})}
		</main>
	)
}
