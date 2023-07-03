import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Avatar, Typography } from "@mui/material";
import { format } from "date-fns";
import { HeroProps } from "./hero.props";
import { calculateEstimatedTimeToRead } from "@/helpers/time.format";

const Hero = ({ blogs }: HeroProps) => {
   return (
      <Box width={"100%"} height={"70vh"} sx={{ backgroundColor: "#000" }}>
         <Carousel
            responsive={{
               mobile: {
                  breakpoint: { max: 4000, min: 0 },
                  items: 1,
               },
            }}
         >
            {blogs.map((item) => (
               <Box key={item.id}>
                  <Box
                     sx={{
                        position: "relative",
                        width: "100%",
                        height: "70vh",
                     }}
                  >
                     <Image
                        src={item.image.url}
                        alt={item.title}
                        fill
                        style={{ objectFit: "cover" }}
                     />
                     <Box
                        sx={{
                           position: "absolute",
                           top: 0,
                           left: 0,
                           bottom: 0,
                           right: 0,
                           width: "100%",
                           height: "100%",
                           backgroundColor: "rgba(0,0,0,.6)",
                        }}
                     >
                        <Box
                           width={{ xs: "100%", md: "70%" }}
                           color={"#fff"}
                           position={"relative"}
                           sx={{
                              top: "50%",
                              transform: "translateY(-50%)",
                              paddingLeft: { xs: "10px", md: "50px" },
                           }}
                        >
                           <Typography
                              sx={{
                                 fontSize: {
                                    xs: "30px",
                                    md: "50px",
                                 },
                              }}
                           >
                              {item.title}
                           </Typography>
                           <Typography
                              sx={{
                                 fontSize: {
                                    xs: "20px",
                                    md: "25px",
                                 },
                              }}
                              color={"gray"}
                           >
                              {item.excerpt}
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
                                 <Typography variant="subtitle2">
                                    {item.author.name}
                                 </Typography>
                                 <Typography variant="caption">
                                    {format(
                                       new Date(item.createdAt),
                                       "dd MMM, yyyy"
                                    )}{" "}
                                    &#x2022;{" "}
                                    {calculateEstimatedTimeToRead(
                                       item.description.text
                                    )}{" "}
                                    min read
                                 </Typography>
                              </Box>
                           </Box>
                        </Box>
                     </Box>
                  </Box>
               </Box>
            ))}
         </Carousel>
      </Box>
   );
};

export default Hero;
