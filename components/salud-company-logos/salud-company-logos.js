const saludCompanyLogos = () => {
	const { registerHtml } = window['tram-one']
	const html = registerHtml()
	return({title}) => {
		return html`
			<div class="salud-company-logos">
				<img class="company-logos" src="logos/salud-consulting-company-logos.png" title=${title} alt=${title} />
			</div>
		`
	}
}