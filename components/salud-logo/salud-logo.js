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
					style=${sizeStyle}
					class="salud-logo"
					src="../../graphics/SaludConsultingLogo.png"
				/>
			`
	}
}
