const saludFooter = () => {
	const { registerHtml, useGlobalStore } = window['tram-one']
	const html = registerHtml({
		'salud-logo': saludLogo()
	})
	return (props, children) => {
		const content = useGlobalStore('content')
		return html`
			<footer class="salud-footer vhs-bottom ">
				<salud-logo size="200px" />
				<div class="salud-footer-title">${content.copy.title}</div>
				<div class="salud-footer-address">
					<div>${content.copy.footer_address_label}</div>
					${content.copy.footer_address_street_address_1}<br/>
					${content.copy.footer_address_street_address_2}
				</div>
				<a class="salud-footer-phone-number" href="tel:+1${content.copy.footer_phone_number}">${content.copy.footer_phone_number}</a>
				<div class="salud-footer-copywrite">${content.copy.sticky_footer}</div>
			</footer>
			`
	}
}
