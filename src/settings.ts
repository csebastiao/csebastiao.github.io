export const profile = {
	fullName: 'Clément Sebastiao',
	title: '',
	institute: 'IT University of Copenhagen',
	author_name: 'Clément Sebastiao', // Author name to be highlighted in the papers section
	research_areas: [
		{
			title: 'Urban Data Science',
			description: 'Data-driven and human-centered analysis of urban challenges.',
		},
		{
			title: 'Applied Network Science',
			description: 'Quantitative network-based modeling.',
		},
		{
			title: 'Sustainable Mobility',
			description: 'Development of ecologically and socially just mode of transports.',
		},
		
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'clse@itu.dk',
	linkedin: 'https://www.linkedin.com/in/cl%C3%A9ment-sebastiao-530455315/',
	x: '',
	github: 'https://github.com/csebastiao',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=9DteMXgAAAAJ',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://csebastiao.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Clément Sebastiao',
	default_description: 'Website of Clément Sebastiao.',
	default_image: '/images/astro-academia.png',
}
