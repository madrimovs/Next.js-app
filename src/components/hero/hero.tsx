import React from "react";

import Box from "@mui/material/Box";

const Hero = () => {
	return (
		<Box width={"100%"} height={"100vh"} sx={{ backgroundColor: "darkgray" }}>
			Hero
		</Box>
	);
};

export default Hero;

const data = [
	{
		image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
		title: "Technical SEO with Hygraph",
		exerpt: "Get started with your SEO implementation when using a Headless CMS",
		author: {
			name: "Samar Badriddinov",
			image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
		},
	},
	{
		image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
		title: "Union Types and Sortable Relations with Hygraph",
		exerpt: "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
		author: {
			name: "Samar Badriddinov",
			image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
		},
	},
];
