import { DownloadIcon } from '@/shared/components/icons/DownloadIcon'
import { FileIcon } from '@/shared/components/icons/FileIcon'
import { IconWrapper } from '@/shared/components/icons/icon-wrapper/IconWrapper'
import { InspectIcon } from '@/shared/components/icons/InspectIcon'
import React from 'react'
import styles from './FileContainer.module.scss'
import { FileContainerProps } from './FileContainer.types'

export const FileContainer: React.FC<FileContainerProps> = ({
	fileName,
	fileUrl,
	icon
}) => {
	return (
		<div className={styles['file-container']}>
			<div className={styles['file-container__icon']}>
				{icon || (
					<IconWrapper size={20} color='var(--clr-accent)'>
						<FileIcon />
					</IconWrapper>
				)}
			</div>

			<span className={styles['file-container__name']}>{fileName}</span>

			<div className={styles['file-container__actions']}>
				<a
					className={styles['file-container__button']}
					href={fileUrl}
					target='_blank'
					rel='noopener noreferrer'
				>
					<IconWrapper size={18}>
						<InspectIcon />
					</IconWrapper>
				</a>
				<a className={styles['file-container__button']} href={fileUrl} download>
					<IconWrapper size={18}>
						<DownloadIcon />
					</IconWrapper>
				</a>
			</div>
		</div>
	)
}
