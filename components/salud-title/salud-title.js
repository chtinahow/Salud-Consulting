const saludTitle = () => {
	const { registerHtml } = window['tram-one']
	const html = registerHtml()
	return (props, children) => {
		return html`
				<h1 class="salud-title">${children}</h1>
			`
	}
}