import Box from "@mui/material/Box";
import { borderRadius } from "@mui/system";
import Image from "next/image";

const Content = () => {
	return (
		<Box width={"70%"}>
			{data.map((item) => (
				<Box
					key={item.image}
					sx={{
						// backgroundColor: "rgba(34, 49, 63)",
						padding: "20px",
						marginTop: "20px",
						borderRadius: "8px",
						boxShadow: "0px 0px 10px rgba(255 , 255 , 255, .5)",
						border: "2px solid gray",
					}}
				>
					<Box position={"relative"} width={"100%"} height={"50vh"}>
						<Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default Content;

const data = [
	{
		image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
		title: "Technical SEO with Hygraph",
		exerpt: "Get started with your SEO implementation when using a Headless CMS",
		author: {
			name: "Sardor Madrimov",
			image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
		},
	},
	{
		image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
		title: "Union Types and Sortable Relations with Hygraph",
		exerpt: "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
		author: {
			name: "Sardor Madrimov",
			image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
		},
	},
];
