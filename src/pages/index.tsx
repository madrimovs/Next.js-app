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
   const blogs = await BlogsService.getAllBlogs();

   console.log(blogs);
   return {
      props: {
         blogs: "message from SSR",
      },
   };
};

interface HomePageProps {
   blogs: BlogsType[];
}
