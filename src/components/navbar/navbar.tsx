import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { navItems } from "@/config/constants";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
   window?: () => Window;
}

const drawerWidth = 240;

export default function Navbar(props: Props) {
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);
   const router = useRouter();

   const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
   };

   const drawer = (
      <Box
         onClick={handleDrawerToggle}
         sx={{
            textAlign: "center",
            backgroundColor: "#000",
            color: "#fff",
            height: "100%",
         }}
      >
         <Box
            sx={{
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between",
               paddingX: "20px",
            }}
         >
            <Box
               sx={{
                  my: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
               }}
               onClick={() => router.push("/")}
            >
               <Diversity2Icon />
               <Typography variant="h6">SMB</Typography>
            </Box>
            <CloseIcon />
         </Box>
         <Divider />
         <List>
            {navItems.map((item) => (
               <ListItem key={item.route} disablePadding>
                  <ListItemButton
                     onClick={() => router.push(item.route)}
                     sx={{ textAlign: "center" }}
                  >
                     <ListItemText primary={item.label} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Box>
   );

   const container =
      window !== undefined ? () => window().document.body : undefined;

   return (
      <Box height={"10vh"} sx={{ display: "flex" }}>
         <AppBar
            sx={{ backgroundColor: "#000", height: "10vh" }}
            component="nav"
         >
            <Toolbar>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
               >
                  {/* <MenuIcon /> */}
               </IconButton>
               <Box
                  sx={{
                     my: 2,
                     display: { xs: "none", sm: "flex" },
                     alignItems: "center",
                     gap: "5px",
                     flexGrow: 1,
                  }}
               >
                  <Diversity2Icon
                     sx={{ cursor: "pointer" }}
                     onClick={() => router.push("/")}
                  />

                  <Typography
                     variant="h6"
                     component="div"
                     sx={{ cursor: "pointer" }}
                     onClick={() => router.push("/")}
                  >
                     SMB
                  </Typography>
               </Box>
               <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  {navItems.map((item) => (
                     <Button
                        onClick={() => router.push(item.route)}
                        key={item.route}
                        sx={{ color: "#fff" }}
                     >
                        {item.label}
                     </Button>
                  ))}
               </Box>
            </Toolbar>
         </AppBar>
         <Box component="nav">
            <Drawer
               container={container}
               variant="temporary"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true,
               }}
               sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                     boxSizing: "border-box",
                     width: drawerWidth,
                  },
               }}
            >
               {drawer}
            </Drawer>
         </Box>
         <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
         </Box>
      </Box>
   );
}
