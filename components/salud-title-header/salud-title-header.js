const saludTitleHeader = () => {
	const { registerHtml, useGlobalStore } = window['tram-one']
	const html = registerHtml({
		'salud-logo': saludLogo()
	})
	return (props, children) => {
		const content = useGlobalStore('content')
		return html`
			<div class="salud-title-header vhs-top">
				<a class="nav-link header-logo" href="/">
					<salud-logo class="logo" size="200px" />
				</a>
				<div class="header-title">${content.copy.title}</div>
				<a class="nav-link header-about-us" href="#about-us">${content.copy.about_us_header}</a>
				<a class="nav-link header-experience" href="#experience">${content.copy.experience_header}</a>
				<a class="nav-link header-services" href="#services">${content.copy.services_header}</a>
				<a class="nav-link header-contact-us" href="#contact-us">${content.copy.contact_us_header}</a>
			</div>
		`
	}
}
