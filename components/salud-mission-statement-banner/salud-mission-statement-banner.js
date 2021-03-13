const saludMissionStatementBanner = () => {
	const { registerHtml } = window['tram-one']
	const html = registerHtml()
	return (props, children) => {
		return html`
				<h2 class="salud-mission-statement-banner vhs-top">
					${children}
				</h2>
			`
	}
}
