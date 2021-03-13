const saludMissionStatementBanner = () => {
	const { registerHtml } = window['tram-one']
	const html = registerHtml()
	return (props, children) => {
		return html`
				<h2 class="salud-mission-statement-banner vhs-top">
					<div class="vhs-fade vhs-delay-3 vhs-duration-6">
						${children}
					</div>
				</h2>
			`
	}
}
