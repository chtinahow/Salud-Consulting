const saludGraphic = () => {
	const { registerHtml } = window['tram-one']
	const html = registerHtml()
	return ({alt, src, position = '31% 64%'}) => {
		const positionStyle = `object-position: ${position}`
		return html`
				<img class="salud-banner-graphic" alt=${alt} src=${src} style=${positionStyle} />
			`
	}
}
