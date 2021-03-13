const saludLoadingIndicator = () => {
	const { registerHtml } = window['tram-one']
	const html = registerHtml()
	return () => {
		return html`
				<div class="loading loading-lg"></div>
			`
	}
}
