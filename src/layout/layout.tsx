import { Footer, Navbar } from "@/components";
import React from "react";
import { LayoutProps } from "./layout.props";

import { Box } from "@mui/material";
export const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Navbar />
			<Box minHeight={"80vh"}>{children}</Box>
			<Footer />
		</>
	);
};
