const saludCompanyLogos = () => {
	const { registerHtml, useGlobalStore } = window['tram-one']
	const html = registerHtml()
	return({title}) => {
		const content = useGlobalStore('content')
		return html`
			<div class="salud-company-logos">
				<img class="company-logos" src=${content.copy.company_logos_image.fields.file.url} title=${title} alt=${title} />
			</div>
		`
	}
}
