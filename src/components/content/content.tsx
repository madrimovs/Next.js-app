import { Avatar, Box, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import { ContentProps } from "./content.props";

const Content = ({ blogs }: ContentProps) => {
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
               }}
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
                        &#x2022; 10 min read
                     </Typography>
                  </Box>
               </Box>
            </Box>
         ))}
      </Box>
   );
};

export default Content;

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
