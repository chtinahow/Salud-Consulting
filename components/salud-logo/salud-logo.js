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
					src="https://raw.githubusercontent.com/Tram-One/tram-logo/master/v3/color_64x64.png"
				/>
			`
	}
}