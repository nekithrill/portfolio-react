import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './ContactForm.module.scss'
import { ContactFormData, ContactFormErrors } from './ContactForm.types'

export const ContactForm = () => {
	const { t } = useTranslation()

	const [formData, setFormData] = useState<ContactFormData>({
		name: '',
		email: '',
		message: ''
	})

	const [errors, setErrors] = useState<ContactFormErrors>({})
	const [submitted, setSubmitted] = useState(false)

	return <div className={styles['contactForm']}></div>
}
