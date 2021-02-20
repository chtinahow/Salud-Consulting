const saludStickyNavBar = () => {
	const { registerHtml } = window['tram-one']
	const html = registerHtml()
	return (props, children) => {
		return html `
			<nav class="salud-sticky-nav-bar">
				<img class="salud-logo" src="https://raw.githubusercontent.com/Tram-One/tram-logo/master/v3/color_64x64.png"></img>
				<a class="nav-link" href="#about-us">${copy.about_us_header}</a>
				<a class="nav-link" href="#experience">${copy.experience_header}</a>
				<a class="nav-link" href="#services">${copy.services_header}</a>
				<a class="nav-link" href="#contact-us">${copy.contact_us_header}</a>
			</nav>
		`
	}
}