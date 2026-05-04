import { MetadataRoute } from "next";
// import { allBlogs, Blog } from "contentlayer/gene  rated";
import { siteMetadata } from "@/data/siteMetadata";
import { allBlogs } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;

  const blogRoutes = allBlogs.map((post) => ({
    url: `${siteUrl}/blog`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "blog", "projects"].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogRoutes];
}
