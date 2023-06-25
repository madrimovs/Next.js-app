import { BlogsType } from "@/interfaces/blogs.interface";
import { CategoryType } from "@/interfaces/categories.interface";

export interface SidebarProps {
   latestBlogs: BlogsType[];
   categories: CategoryType[];
}
