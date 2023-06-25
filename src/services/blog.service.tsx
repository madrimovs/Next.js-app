import { BlogsType } from "@/interfaces/blogs.interface";
import { CategoryType } from "@/interfaces/categories.interface";
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const BlogsService = {
   async getAllBlogs() {
      const query = gql`
         query GetBlogs {
            blogs {
               id
               slug
               title
               excerpt
               createdAt
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

      const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
      return result.blogs;
   },

   async getLatestBlog() {
      const query = gql`
         query GetLatestBlog {
            blogs(last: 2) {
               id
               slug
               title
               createdAt
               image {
                  url
               }
               author {
                  name
                  avatar {
                     url
                  }
               }
            }
         }
      `;
      const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
      return result.blogs;
   },

   async getCategories() {
      const query = gql`
         query GetCategories {
            categories {
               slug
               label
            }
         }
      `;
      const result = await request<{ categories: CategoryType[] }>(
         graphqlAPI,
         query
      );
      return result.categories;
   },
};
