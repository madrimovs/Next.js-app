import { Layout } from "@/layout/layout";
import { Button, Input } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Index() {
	return (
		<Layout>
			<Head>
				<title>Home Page</title>
			</Head>

			<Link href="./about">
				<p>Go to About page</p>
			</Link>

			<Input placeholder="enter text"></Input>
			<Button variant="outlined">Click</Button>
		</Layout>
	);
}
