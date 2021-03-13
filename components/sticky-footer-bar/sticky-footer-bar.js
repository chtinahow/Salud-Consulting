const saludStickyFooterBar = () => {
	const { registerHtml, useGlobalStore } = window['tram-one']
	const html = registerHtml()
	return (props, children) => {
		const content = useGlobalStore('content')
		return html `
			<footer class="salud-sticky-footer-bar vhs-bottom vhs-delay-5">
				${content.copy.sticky_footer}
			</footer>
		`
	}
}
