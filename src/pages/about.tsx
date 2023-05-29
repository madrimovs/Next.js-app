import { Layout } from "@/layout/layout";
import Link from "next/link";
import React from "react";

const About = () => {
	return (
		<Layout>
			About
			<Link href="/">Go to Home Page</Link>
		</Layout>
	);
};

export default About;
