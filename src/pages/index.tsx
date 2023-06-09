import { Content, Hero, Sidebar } from "@/components";
import { BlogsType } from "@/interfaces/blogs.interface";
import { Layout } from "@/layout/layout";
import Box from "@mui/material/Box";
import { GetServerSideProps } from "next";
import { BlogsService } from "../services/blog.service";
import { CategoryType } from "@/interfaces/categories.interface";
import SEO from "@/layout/seo/seo";

export default function Index({
   blogs,
   latestBlogs,
   categories,
}: HomePageProps) {
   return (
      <SEO metaTitle="SMB | Home">
         <Layout>
            <Hero blogs={blogs.slice(0, 3)} />
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
               <Sidebar latestBlogs={latestBlogs} categories={categories} />
               <Content blogs={blogs} />
            </Box>
         </Layout>
      </SEO>
   );
}

export const getServerSideProps: GetServerSideProps<
   HomePageProps
> = async () => {
   const blogs = await BlogsService.getAllBlogs();
   const latestBlogs = await BlogsService.getLatestBlog();
   const categories = await BlogsService.getCategories();

   return {
      props: {
         blogs,
         latestBlogs,
         categories,
      },
   };
};

interface HomePageProps {
   blogs: BlogsType[];
   latestBlogs: BlogsType[];
   categories: CategoryType[];
}
