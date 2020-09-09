module.exports = {
	name: "Tom Hermans", // optional, falls back to object key
	description: "Some of my own sites",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	// skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://www.11ty.dev/",
		"https://www.gatsbyjs.com/",
		
		"http://www.tomhermans.com/",
		"https://vibrant-benz-d6c5e1.netlify.app/",
		"https://tomhermans-cv.netlify.app/",
		"https://restaurantcharlotte.be/",
		"https://wonderful-mcclintock-84a018.netlify.app/",
		"https://gthemes-gatsbycloud.netlify.app/",
		"https://condescending-blackwell-d6efdb.netlify.app/",
    "https://relaxed-joliot-5a5065.netlify.app/",
    "https://gridsome-wpgraphql.netlify.app/",
    "https://gstw-vibrant-mccarthy-11548d.netlify.app/",
    "https://th-gatsby-starter.netlify.app/",
		// Popular Posts
		"https://www.zachleat.com/web/lighthouse-in-footer/",
		"https://www.zachleat.com/web/speedlify/",
		"https://www.zachleat.com/web/comprehensive-webfonts/",
		"https://www.zachleat.com/web/google-fonts-display/",
	]
};
