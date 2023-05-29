import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
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

interface Props {
	window?: () => Window;
}

const drawerWidth = 240;

export default function Navbar(props: Props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					paddingX: "20px",
				}}
			>
				<Box sx={{ my: 2, display: "flex", alignItems: "center", gap: "5px" }}>
					<Diversity2Icon />
					<Typography variant="h6">SMB</Typography>
				</Box>
				<CloseIcon />
			</Box>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item.route} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={item.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar component="nav">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
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
						<Diversity2Icon />

						<Typography
							variant="h6"
							component="div"
							// sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
						>
							SMB
						</Typography>
					</Box>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{navItems.map((item) => (
							<Button key={item.route} sx={{ color: "#fff" }}>
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
						"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
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
