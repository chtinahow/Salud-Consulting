const saludContactForm = () => {
	const { registerHtml, useStore, useGlobalStore } = window['tram-one']
	const html = registerHtml()
	return (props, children) => {
		const content = useGlobalStore('content')
		const fieldStore = useStore({
			'name': { value: '', isInError: false },
			'email': { value: '', isInError: false },
			'phone': { value: '', isInError: false },
			'services': { value: [], isInError: false },
			'message': { value: '', isInError: false },
		})

		const emailSent = useStore({
			status: undefined
		})

		const onSubmit = async (event) => {
			event.preventDefault()
			// validate if any required fields are missing
			const form = event.target

			// check the primary fields first, these all must be filled in
			const name = form.name.value
			const email = form.email.value
			const phone = form.phone.value
			const message = form.message.value

			const updatePrimaryFieldState = ([fieldName, value]) => {
				// update the value, so we can read on re-render
				fieldStore[fieldName].value = value
				// update fieldStore directly, set isInError if value is empty string
				fieldStore[fieldName].isInError = value === ''
			}

			Object.entries({name, email, phone, message}).forEach(updatePrimaryFieldState)

			// check the service fields next, one of these must be checked
			const service_advisory = form.service_advisory.checked
			const service_support = form.service_support.checked

			// save the checked values in the fieldStore
			fieldStore.services.value = [
				service_advisory ? 'service_advisory' : '',
				service_support ? 'service_support' : ''
			]
			// if all services are false, set services isInError to true
			fieldStore.services.isInError = (!service_advisory && !service_support )

			// if no field value is in error, submit the message
			const fieldInError = (field) => field.isInError
			const areAnyFieldsInError = Object.values(fieldStore).some(fieldInError)
			if (!areAnyFieldsInError) {
				try {
					// get the list of labels for the services selected
					const getServiceLabel = serviceValue => {
						return content.copy.contact_us_requested_services.find(service => service.value == serviceValue).fields.label
					}
					const nonEmptyService = serviceValue => Boolean(serviceValue)
					const requestedServices = fieldStore.services.value.filter(nonEmptyService).map(getServiceLabel)

					const emailFormParameters = {
						name,
						email,
						phone,
						message,
						services: requestedServices.join(', ')
					}
					emailSent.status = 'sending'
					await emailjs.send('service_6id09rz', 'template_ycw89o3', emailFormParameters)
					emailSent.status = 'success'
				} catch (error) {
					emailSent.status = 'error'
				}
			}
		}

		const formFooter = (() => {
			switch(emailSent.status) {
				case 'sending':
					// if the email is sending, show a banner while they wait
					return html`<div class="toast toast-warning">${content.copy.email_status_sending}</div>`
				case 'success':
					// if the email was sent, show a banner that it succeeded
					return html`<div class="toast toast-success">${content.copy.email_status_success}</div>`
				case 'error':
					// if the email failed to send, show an error
					return html`<div class="toast toast-error">${content.copy.email_status_error}</div>`
				default:
					// if the email has not been sent, show the submit button
					return html`<input type="submit" class="salud-contact-form-submit btn btn-primary" value=${content.copy.contact_us_submit_button_label} />`
			}
		})()

		const getFieldError = (fieldName) => fieldStore[fieldName].isInError ? 'has-error is-error' : ''
		return html`
			<form class="salud-contact-form" onsubmit=${onSubmit}>
				<div class="form-group ${getFieldError('name')}">
					<label class="form-label" for="name">${content.copy.contact_us_name_label}</label>
					<input class="form-input" type="text" id="name" placeholder="${content.copy.contact_us_name_label}"
						value=${fieldStore.name.value}/>
				</div>
				<div class="form-group ${getFieldError('email')}">
					<label class="form-label" for="email">${content.copy.contact_us_email_address_label}</label>
					<input class="form-input" type="email" id="email" placeholder="${content.copy.contact_us_email_address_label}"
						value=${fieldStore.email.value}/>
				</div>
				<div class="form-group ${getFieldError('phone')}">
					<label class="form-label" for="phone">${content.copy.contact_us_phone_number_label}</label>
					<input class="form-input" type="tel" id="phone" placeholder="${content.copy.contact_us_phone_number_label}"
						value=${fieldStore.phone.value} />
				</div>
				<div class="form-group">
					<label class="form-label" for="services">${content.copy.contact_us_requested_services_label}</label>
					${content.copy.contact_us_requested_services.map(service => html`
						<label class="form-checkbox ${getFieldError('services')}">
							<input type="checkbox" id=${service.fields.value} ${fieldStore.services.value.includes(service.value) ? 'checked' : ''}/>
							<i class="form-icon"></i>
							${service.fields.label}
						</label>
					`)}
				</div>
				<div class="form-group ${getFieldError('message')}">
					<label class="form-label" for="message">${content.copy.contact_us_detailed_message_label}</label>
					<textarea class="form-input" id="message" placeholder="${content.copy.contact_us_detailed_message_label}" rows="3">
						${fieldStore.message.value}
					</textarea>
				</div>
				${formFooter}
			</form>
		`
	}
}
