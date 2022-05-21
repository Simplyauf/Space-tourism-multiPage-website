module.exports = {
	content: ["./doc/*.html"],
	theme: {
		extend: {
			colors: {
				primaryColor: "hsl(231, 77%, 90%)",
				secondaryColor: "hsl(0, 0%, 100%)",
				neutralColor: "hsl(230, 35%, 7%)",
			},
			fontFamily: {
				Bellefair: ["Bellefair", "serif"],
				Barlow: ["Barlow Condensed", "sans-serif"],
			},
			screens: {
				laptop: "1300px",
				tablet: { min: "550px", max: "767px" },
			},
		},
		plugins: [],
	},
};
