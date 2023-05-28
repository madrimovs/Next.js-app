import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function About() {
	return (
		<>
			<Head>
				<title>About Page</title>
			</Head>
			<h1>About Page</h1>
			<Link href={"./index"}>Go back Home Page</Link>
		</>
	);
}
