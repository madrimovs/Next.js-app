import { Sidebar } from "@/components";
import { calculateEstimatedTimeToRead } from "@/helpers/time.format";
import { BlogsType } from "@/interfaces/blogs.interface";
import { CategoryType } from "@/interfaces/categories.interface";
import { Layout } from "@/layout/layout";
import SEO from "@/layout/seo/seo";
import { BlogsService } from "@/services/blog.service";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";

const DetailedBlogsPage = ({
   blog,
   latestBlogs,
   categories,
}: DetailedBlogsPageProps) => {
   return (
      <SEO metaTitle={blog.title}>
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
               <Box width={{ xs: "100%", md: "70%" }}>
                  <Box
                     sx={{
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0px 0px 10px rgba(255 , 255 , 255, .5)",
                        border: "2px solid gray",
                     }}
                     position={"relative"}
                     width={"100%"}
                     height={{ xs: "30vh", md: "50vh" }}
                  >
                     <Image
                        src={blog.image.url}
                        alt={blog.title}
                        fill
                        style={{ objectFit: "cover", borderRadius: "10px" }}
                     />
                  </Box>
                  <Box
                     display={"flex"}
                     rowGap={"10px"}
                     flexDirection={"column"}
                  >
                     <Box
                        sx={{ display: "flex", gap: "10px", marginTop: "20px" }}
                     >
                        <Avatar
                           alt={blog.author.name}
                           src={blog.author.avatar.url}
                        />
                        <Box>
                           <Typography variant="subtitle2">
                              {blog.author.name}
                           </Typography>
                           <Typography variant="caption" color={"gray"}>
                              {format(new Date(blog.createdAt), "dd MMM, yyyy")}{" "}
                              &#x2022;{" "}
                              {calculateEstimatedTimeToRead(
                                 blog.description.text
                              )}{" "}
                              min read
                           </Typography>
                        </Box>
                     </Box>
                     <Typography variant="h4" marginTop={"5px"}>
                        {blog.title}
                     </Typography>
                     <Typography color={"grey"}>{blog.excerpt}</Typography>
                     <Divider color={"grey"} />
                     <div
                        style={{ opacity: ".5" }}
                        dangerouslySetInnerHTML={{
                           __html: blog.description.html,
                        }}
                     />
                  </Box>
               </Box>
               <Sidebar latestBlogs={latestBlogs} categories={categories} />
            </Box>
         </Layout>
      </SEO>
   );
};

export default DetailedBlogsPage;

export const getServerSideProps: GetServerSideProps<
   DetailedBlogsPageProps
> = async ({ query }) => {
   const blog = await BlogsService.getDetailedBlogs(query.slug as string);
   const latestBlogs = await BlogsService.getLatestBlog();
   const categories = await BlogsService.getCategories();
   return {
      props: {
         blog,
         latestBlogs,
         categories,
      },
   };
};

interface DetailedBlogsPageProps {
   blog: BlogsType;
   latestBlogs: BlogsType[];
   categories: CategoryType[];
}
