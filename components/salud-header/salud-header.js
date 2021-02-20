const saludHeader = () => {
	const { registerHtml } = window['tram-one']
	const html = registerHtml()
	return (props, children) => {
		return html`
			<h2 id=${props.id} class="salud-header">${children}</h2>
		`
	}
}