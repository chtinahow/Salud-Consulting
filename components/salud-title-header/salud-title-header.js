const saludTitleHeader = () => {
	const { registerHtml } = window['tram-one']
	const html = registerHtml({
		'salud-logo': saludLogo()
	})
	return (props, children) => {
		return html`
			<div class="salud-title-header">
				<salud-logo class="logo" size="50px" />
				<div class="header-title">${copy.title}</div>
				<a class="nav-link header-about-us" href="#about-us">${copy.about_us_header}</a>
				<a class="nav-link header-experience" href="#experience">${copy.experience_header}</a>
				<a class="nav-link header-services" href="#services">${copy.services_header}</a>
				<a class="nav-link header-contact-us" href="#contact-us">${copy.contact_us_header}</a>
			</div>
		`
	}
}