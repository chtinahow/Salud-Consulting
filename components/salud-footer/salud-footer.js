const saludFooter = () => {
	const { registerHtml } = window['tram-one']
	const html = registerHtml({
		'salud-logo': saludLogo()
	})
	return (props, children) => {
		return html`
			<footer class="salud-footer">
				<salud-logo size="50px" />
				<div class="salud-footer-title">${copy.title}</div>
				<div class="salud-footer-address">
					<div>${copy.footer_address_label}</div>
					${copy.footer_address_street_address_1}<br/>
					${copy.footer_address_street_address_2}
				</div>
				<div class="salud-footer-copywrite">${copy.sticky_footer}</div>
			</footer>
			`
	}
}