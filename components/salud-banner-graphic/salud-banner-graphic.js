const saludGraphic = () => {
	const { registerHtml } = window['tram-one']
	const html = registerHtml()
	return ({alt}) => {
		return html`
				<img class="salud-banner-graphic" alt=${alt} />
			`
	}
}