import { Content, Sidebar } from "@/components";
import { BlogsType } from "@/interfaces/blogs.interface";
import { CategoryType } from "@/interfaces/categories.interface";
import { Layout } from "@/layout/layout";
import { BlogsService } from "@/services/blog.service";
import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import React from "react";

const CategoryDetailedPage = ({
   blogs,
   latestBlogs,
   categories,
}: DetailedCategoriesPageProps) => {
   return (
      <Layout>
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
   );
};

export default CategoryDetailedPage;

export const getServerSideProps: GetServerSideProps<
   DetailedCategoriesPageProps
> = async ({ query }) => {
   const blogs = await BlogsService.getDetailedCategoriesBlog(
      query.slug as string
   );
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

interface DetailedCategoriesPageProps {
   blogs: BlogsType;
   latestBlogs: BlogsType[];
   categories: CategoryType[];
}
