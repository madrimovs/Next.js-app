import React from "react";
import { Typography, Button, Box, Divider, Avatar } from "@mui/material";
import { navItems } from "@/config/constants";
import { Fragment } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { SidebarProps } from "./sidebar.props";

const Sidebar = ({ latestBlogs, categories }: SidebarProps) => {
   return (
      <>
         <Box width={{ xs: "100%", lg: "30%" }}>
            <Box
               position={"sticky"}
               top={"100px"}
               sx={{ transition: "all .3s ease" }}
            >
               <Box
                  padding={"20px"}
                  border={"2px solid gray"}
                  borderRadius={"8px"}
                  boxShadow={"5px 5px 5px 5px solid white"}
               >
                  <Typography variant="h5">Latest blogs</Typography>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                     {latestBlogs.map((item) => (
                        <Box key={item.title} marginTop={"20px"}>
                           <Box
                              sx={{
                                 display: "flex",
                                 gap: "20px",
                                 alignItems: "center",
                              }}
                           >
                              <Image
                                 src={item.image.url}
                                 width={100}
                                 height={100}
                                 alt={item.title}
                                 style={{
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                 }}
                              />

                              <Box
                                 sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                 }}
                              >
                                 <Typography variant="body1">
                                    {item.title}
                                 </Typography>

                                 <Box
                                    sx={{
                                       display: "flex",
                                       gap: "10px",
                                       marginTop: "20px",
                                    }}
                                 >
                                    <Avatar
                                       alt={item.author.name}
                                       src={item.author.avatar.url}
                                    />
                                    <Box>
                                       <Typography variant="body2">
                                          {item.author.name}
                                       </Typography>
                                       <Typography
                                          variant="body2"
                                          sx={{ opacity: ".6" }}
                                       >
                                          {format(
                                             new Date(item.createdAt),
                                             "dd MMM, yyyy"
                                          )}{" "}
                                          &#x2022; 10 min read
                                       </Typography>
                                    </Box>
                                 </Box>
                              </Box>
                           </Box>
                           <Divider sx={{ marginTop: "20px" }} />
                        </Box>
                     ))}
                  </Box>
               </Box>
               <Box
                  padding={"20px"}
                  border={"2px solid gray"}
                  borderRadius={"8px"}
                  boxShadow={"5px 5px 5px 5px solid white"}
                  marginTop={"20px"}
               >
                  <Typography variant="h5">Category</Typography>

                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                     {categories.map((nav) => (
                        <Fragment key={nav.slug}>
                           <Button
                              fullWidth
                              sx={{
                                 justifyContent: "start",
                                 height: "50px",
                              }}
                           >
                              {nav.label}
                           </Button>
                           <Divider />
                        </Fragment>
                     ))}
                  </Box>
               </Box>
            </Box>
         </Box>
      </>
   );
};

export default Sidebar;

const data = [
   {
      image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
      title: "Technical SEO with Hygraph",
      exerpt:
         "Get started with your SEO implementation when using a Headless CMS",
      author: {
         name: "Sardor Madrimov",
         image: "https://media.licdn.com/dms/image/D4D03AQGtaKyYt4v6Hw/profile-displayphoto-shrink_400_400/0/1681739470468?e=1691625600&v=beta&t=yqpd-WPbA-9mXNSNcK86r7jNzHSFhj82GD4ehPZOBwc",
      },
   },
   {
      image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
      title: "Union Types and Sortable Relations with Hygraph",
      exerpt:
         "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
      author: {
         name: "Sardor Madrimov",
         image: "https://media.licdn.com/dms/image/D4D03AQGtaKyYt4v6Hw/profile-displayphoto-shrink_400_400/0/1681739470468?e=1691625600&v=beta&t=yqpd-WPbA-9mXNSNcK86r7jNzHSFhj82GD4ehPZOBwc",
      },
   },
];
