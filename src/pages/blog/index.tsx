import { Content } from "@/components";
import { BlogsType } from "@/interfaces/blogs.interface";
import { Layout } from "@/layout/layout";
import { BlogsService } from "@/services/blog.service";
import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import React from "react";

const BlogPage = ({ blogs }: BlogPageProps) => {
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
               justifyContent: "center",
            }}
         >
            <Content blogs={blogs} />
         </Box>
      </Layout>
   );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<
   BlogPageProps
> = async () => {
   const blogs = await BlogsService.getAllBlogs();
   return {
      props: { blogs },
   };
};

interface BlogPageProps {
   blogs: BlogsType[];
}
