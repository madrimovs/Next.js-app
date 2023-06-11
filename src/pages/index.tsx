import { Content, Hero, Sidebar } from "@/components";
import { BlogsType } from "@/interfaces/blogs.interface";
import { Layout } from "@/layout/layout";
import Box from "@mui/material/Box";
import { GetServerSideProps } from "next";
import { BlogsService } from "../services/blog.service";

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
            <Content />
         </Box>
      </Layout>
   );
}

export const getServerSideProps: GetServerSideProps = async () => {
<<<<<<< HEAD
	const blogs = await BlogsService.getAllBlogs();

	console.log(blogs);
	return {
		props: {
			blogs: "message from SSR",
		},
	};
=======
   const blogs = await BlogsService.getAllBlogs();

   console.log(blogs);
   return {
      props: {
         blogs: "message from SSR",
      },
   };
>>>>>>> a946f30babc103b65511171b47e5e4ba12574053
};

interface HomePageProps {
   blogs: BlogsType[];
}
