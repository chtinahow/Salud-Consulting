const saludLogo = () => {
	const { registerHtml } = window['tram-one']
	const html = registerHtml()
	return (props, children) => {
		const sizeStyle = `
			width: ${props.size};
			height: ${props.size};
		`
		return html`
				<img
					alt="Salud Consulting Logo - Go to Home Page"
					style=${sizeStyle}
					class="salud-logo"
					src="../../graphics/SaludConsultingLogo.png"
				/>
			`
	}
}
