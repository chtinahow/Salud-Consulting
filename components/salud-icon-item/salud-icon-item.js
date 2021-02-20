const saludIconItem = () => {
	const { registerHtml } = window['tram-one']
	const html = registerHtml()
	return ({icon, label}, children) => {
		return html`
				<div class="salud-icon-item">
					<i class="salud-icon-item-icon fad ${icon}"></i>
					<p>${label}</p>
				</div>
			`
	}
}