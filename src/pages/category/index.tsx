import { CategoryType } from "@/interfaces/categories.interface";
import { Layout } from "@/layout/layout";
import { BlogsService } from "@/services/blog.service";
import { Box, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import React from "react";

const CategoryPage = ({ categories }: CategoryPageProps) => {
   return (
      <Layout>
         <Box
            width={{ xs: "100%", md: "80%" }}
            marginX={"auto"}
            height={{ xs: "30vh", md: "50vh" }}
            marginTop={"10vh"}
            sx={{
               backgroundColor: "black",
               color: "white",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <Typography>All Categories</Typography>
         </Box>
      </Layout>
   );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps<
   CategoryPageProps
> = async () => {
   const categories = await BlogsService.getCategories();
   return {
      props: { categories },
   };
};

interface CategoryPageProps {
   categories: CategoryType[];
}
