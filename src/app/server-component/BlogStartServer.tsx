import { prisma } from "@/core/lib/prisma";
import BlogStart from "@/app/[locale]/home/.components/blog-start";

export default async function BlogStartServer() {
  // 1. Lấy tất cả bài viết trong section blog
  const posts = await prisma.post.findMany({
    where: { sectionId: "section_blog", status: "published" },
    orderBy: { sortOrder: "asc" },
  });

  // 2. Lấy media liên quan (nếu có)
  const media = await prisma.media.findMany({
    where: { itemType: "post" },
  });

  // 3. Map dữ liệu ra props phù hợp với BlogStart
  const blogPosts = posts.map((post) => {
    const image = media.find((m) => m.itemId === post.id);
    return {
      id: post.id,
      image: image?.url || "/assets/images/blog-start.png", // fallback ảnh mặc định
      date: post.excerpt?.split(" - ")[1] || "Unknown Date",
      category: post.excerpt?.split(" - ")[0] || "Uncategorized",
      title: post.title,
      link: `/blog/${post.slug}`,
    };
  });

  return <BlogStart posts={blogPosts} />;
}
