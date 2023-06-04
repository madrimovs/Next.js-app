import { Content, Hero, Sidebar } from "@/components";
import { Layout } from "@/layout/layout";
import Box from "@mui/material/Box";

export default function Index() {
	return (
		<Layout>
			<Hero />
			<Box sx={{ display: "flex", gap: 20, padding: "20px" }}>
				<Sidebar />
				<Content />
			</Box>
		</Layout>
	);
}
