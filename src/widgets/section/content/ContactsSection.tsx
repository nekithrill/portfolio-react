import styles from '@/widgets/section/Section.module.scss'
import { useTranslation } from 'react-i18next'

export function ContactsSection() {
	const { t } = useTranslation('')

	return (
		<>
			<div className={styles['contacts__content']}>
				{t('')}
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
					temporibus distinctio iusto, pariatur officia quaerat adipisci
					repellat sapiente beatae repudiandae voluptas. Voluptas quae iste
					libero dignissimos reprehenderit! Veritatis ad nobis blanditiis. Vel,
					minus maxime. Molestiae reprehenderit nostrum numquam rem amet, vel
					placeat suscipit dolorem. Iste corporis harum nobis neque earum labore
					ducimus placeat, autem quasi voluptas quaerat eos beatae quis veniam
					aspernatur id assumenda consequatur perferendis similique incidunt
					adipisci in libero exercitationem! Nihil molestias obcaecati assumenda
					saepe pariatur aut eos cumque, ut culpa magnam voluptatem sunt vel
					molestiae distinctio perspiciatis velit porro officiis, at facilis
					aliquam et in impedit? Numquam.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
					temporibus distinctio iusto, pariatur officia quaerat adipisci
					repellat sapiente beatae repudiandae voluptas. Voluptas quae iste
					libero dignissimos reprehenderit! Veritatis ad nobis blanditiis. Vel,
					minus maxime. Molestiae reprehenderit nostrum numquam rem amet, vel
					placeat suscipit dolorem. Iste corporis harum nobis neque earum labore
					ducimus placeat, autem quasi voluptas quaerat eos beatae quis veniam
					aspernatur id assumenda consequatur perferendis similique incidunt
					adipisci in libero exercitationem! Nihil molestias obcaecati assumenda
					saepe pariatur aut eos cumque, ut culpa magnam voluptatem sunt vel
					molestiae distinctio perspiciatis velit porro officiis, at facilis
					aliquam et in impedit? Numquam.
				</p>
			</div>
		</>
	)
}
