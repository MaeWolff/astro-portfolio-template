import { getCollection } from "astro:content";
import { SITE_URL } from "../data/config";

export async function GET() {
  const siteUrl = SITE_URL;
  const posts = await getCollection("posts");
  const isPublishedPost = posts.filter(
    (post) => post.data.isPublish && !post.data.isDraft
  );

  const result = `  
  <?xml version="1.0" encoding="UTF-8"?>  
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">  
    <url><loc>${siteUrl}/</loc></url>  
    <url><loc>${siteUrl}/posts/</loc></url>  

   
    ${isPublishedPost
      .map((post) => {
        const lastMod = post.data.publishedAt.toISOString();
        return `<url><loc>${siteUrl}${post.slug}/</loc><lastmod>${lastMod}</lastmod></url>`;
      })
      .join("\n")}  
  </urlset>  
  `.trim();

  return new Response(result, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
