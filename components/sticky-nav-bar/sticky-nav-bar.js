const saludStickyNavBar = () => {
	const { registerHtml, useGlobalStore } = window['tram-one']
	const html = registerHtml()
	return (props, children) => {
		const content = useGlobalStore('content')
		return html `
			<nav class="salud-sticky-nav-bar vhs-top vhs-delay-5">
				<a class="nav-link header" href="#">
					<img class="salud-logo" alt="Salud Consulting Logo - Go to Home Page" src="../../graphics/SaludConsultingLogo.png"></img>
				</a>
				<a class="nav-link" href="#about-us">${content.copy.about_us_header}</a>
				<a class="nav-link" href="#experience">${content.copy.experience_header}</a>
				<a class="nav-link" href="#services">${content.copy.services_header}</a>
				<a class="nav-link" href="#contact-us">${content.copy.contact_us_header}</a>
			</nav>
		`
	}
}
