const saludPageContent = () => {
	const { registerHtml } = window['tram-one']
	const html = registerHtml()
	return (props, children) => {
		return html`
			<article class="salud-page-content vhs-top">${children}</article>
		`
	}
}
