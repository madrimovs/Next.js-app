import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const BlogService = {
	async getAllBlogs() {
		const query = gql`
			query GetBlogs {
				blogs {
					id
					slug
					title
					excerpt
					image {
						url
					}
					author {
						name
						avatar {
							url
						}
					}
					category {
						label
						slug
					}
				}
			}
		`;

		const result = await request(graphqlAPI, query);
		return result;
	},
};
