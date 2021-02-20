const constructionBanner = () => {
	const { registerHtml } = window['tram-one']
	const html = registerHtml()
	return (props, children) => {
		return html`
			<div class="construction-banner toast toast-warning">
				${children}
			</div>
		`
	}
}