import { Avatar, Box, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import { ContentProps } from "./content.props";
import { calculateEstimatedTimeToRead } from "@/helpers/time.format";
import { useRouter } from "next/router";

const Content = ({ blogs }: ContentProps) => {
   const router = useRouter();
   return (
      <Box width={{ xs: "100%", lg: "70%" }}>
         {blogs.map((item) => (
            <Box
               key={item.title}
               sx={{
                  padding: "20px",
                  marginTop: "20px",
                  borderRadius: "8px",
                  boxShadow: "0px 0px 10px rgba(255 , 255 , 255, .5)",
                  border: "2px solid gray",
                  cursor: "pointer",
               }}
               onClick={() => router.push(`/blog/${item.slug}`)}
            >
               <Box
                  position={"relative"}
                  width={"100%"}
                  height={{ xs: "30vh", md: "50vh" }}
               >
                  <Image
                     src={item.image.url}
                     alt={item.title}
                     fill
                     style={{ objectFit: "cover", borderRadius: "10px" }}
                  />
               </Box>
               <Typography variant="h5" marginTop={"25px"}>
                  {item.title}
               </Typography>
               <Typography variant="body1" color={"gray"}>
                  {item.excerpt}
               </Typography>
               <Divider color={"gray"} sx={{ marginTop: "15px" }} />
               <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                  <Avatar alt={item.author.name} src={item.author.avatar.url} />
                  <Box>
                     <Typography variant="subtitle2">
                        {item.author.name}
                     </Typography>
                     <Typography variant="caption" color={"gray"}>
                        {format(new Date(item.createdAt), "dd MMM, yyyy")}{" "}
                        &#x2022;{" "}
                        {calculateEstimatedTimeToRead(item.description.text)}{" "}
                        min read
                     </Typography>
                  </Box>
               </Box>
            </Box>
         ))}
      </Box>
   );
};

export default Content;
