import { Content, Hero, Sidebar } from "@/components";
import { Layout } from "@/layout/layout";
import { BlogService } from "@/services/blog.service";
import Box from "@mui/material/Box";
import { useEffect } from "react";

export default function Index(props: any) {
	console.log(props);
	// useEffect(() => {
	// 	BlogService.getAllBlogs().then((data) => console.log(data));
	// }, []);
	return (
		<Layout>
			<Hero />
			<Box
				sx={{
					display: "flex",
					gap: "20px",
					padding: "20px",
					backgroundColor: "#000",
					color: "#fff",
					flexDirection: { xs: "column", lg: "row" },
				}}
			>
				<Sidebar />
				<Content />
			</Box>
		</Layout>
	);
}

export const getServerSideProps = async () => {
	return {
		props: {
			message: "Message from SSR",
		},
	};
};
