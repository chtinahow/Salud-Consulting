const saludStickyFooterBar = () => {
	const { registerHtml } = window['tram-one']
	const html = registerHtml()
	return (props, children) => {
		return html `
			<footer class="salud-sticky-footer-bar">
				${copy.sticky_footer}
			</footer>
		`
	}
}