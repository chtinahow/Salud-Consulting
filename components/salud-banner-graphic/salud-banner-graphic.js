const saludGraphic = () => {
	const { registerHtml } = window['tram-one']
	const html = registerHtml()
	return ({src, position = '31% 64%'}) => {
		const positionStyle = `object-position: ${position}`
		return html`
				<img class="salud-banner-graphic" alt="null" src=${src} style=${positionStyle} />
			`
	}
}
