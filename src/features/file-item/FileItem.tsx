import { DownloadIcon } from '@/shared/components/icons/DownloadIcon'
import { FileIcon } from '@/shared/components/icons/FileIcon'
import { IconWrapper } from '@/shared/components/icons/icon-wrapper/IconWrapper'
import { InspectIcon } from '@/shared/components/icons/InspectIcon'
import React from 'react'
import styles from './FileItem.module.scss'
import { FileItemProps } from './FileItem.types'

export const FileItem: React.FC<FileItemProps> = ({
	fileName,
	fileUrl,
	icon
}) => {
	return (
		<div className={styles['fileItem']}>
			<div className={styles['fileItem__icon']}>
				{icon || (
					<IconWrapper size={20}>
						<FileIcon />
					</IconWrapper>
				)}
			</div>

			<span className={styles['fileItem__name']}>{fileName}</span>

			<div className={styles['fileItem__actions']}>
				<a
					className={styles['fileItem__button']}
					href={fileUrl}
					target='_blank'
					rel='noopener noreferrer'
				>
					<IconWrapper size={18}>
						<InspectIcon />
					</IconWrapper>
				</a>
				<a className={styles['fileItem__button']} href={fileUrl} download>
					<IconWrapper size={18}>
						<DownloadIcon />
					</IconWrapper>
				</a>
			</div>
		</div>
	)
}
