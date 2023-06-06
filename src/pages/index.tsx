import { Content, Hero, Sidebar } from "@/components";
import { BlogsType } from "@/interfaces/blogs.interface";
import { Layout } from "@/layout/layout";
import { BlogService } from "@/services/blog.service";
import Box from "@mui/material/Box";
import { GetServerSideProps } from "next";

export default function Index({ blogs }: HomePageProps) {
	console.log(blogs);

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
				<Content blogs={blogs} />
			</Box>
		</Layout>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const blogs = await BlogService.getAllBlogs();

	return {
		props: {
			blogs,
		},
	};
};

interface HomePageProps {
	blogs: BlogsType[];
}
