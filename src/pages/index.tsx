import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Index() {
	return (
		<>
			<Head>
				<title>Home Page</title>
			</Head>
			<h1>Index Page</h1>
			<Link href={"./about"}>Go to About Page</Link>
		</>
	);
}
