import { Button, Input } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Index() {
	return (
		<>
			<Head>
				<title>Home Page</title>
			</Head>

			<h1>Home Page</h1>

			<Link href="./about">
				<p>Go to About page</p>
			</Link>

			<Input placeholder="enter text"></Input>
			<Button variant="outlined">Click</Button>
		</>
	);
}
