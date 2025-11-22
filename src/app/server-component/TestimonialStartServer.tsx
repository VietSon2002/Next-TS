import { prisma } from "@/core/lib/prisma";
import TestimonialStart from "@/app/[locale]/home/.components/testimonial-start";
import { EIcon } from "@/shared/enums";

export default async function TestimonialStartServer() {
  // 1. Lấy tất cả bài post trong section testimonial
  const posts = await prisma.post.findMany({
    where: { sectionId: "section_testimonial", status: "published" },
    orderBy: { sortOrder: "asc" },
  });

  // 2. Lấy media liên quan
  const media = await prisma.media.findMany({
    where: { itemType: "post" },
  });

  // 3. Map thành định dạng Testimonial
  const testimonials = posts.map((post) => {
    const avatar = media.find((m) => m.itemId === post.id);
    return {
      id: Number(post.id.replace(/\D/g, "")) || Math.floor(Math.random() * 10000), // đảm bảo number
      name: post.title,
      role: post.excerpt ?? "",
      avatar: avatar?.url?.trim() || "/assets/images/testimonial-start.png",
      rating: 5, // default rating nếu không có trường rating trong DB
      comment: post.content || "",
      icon: EIcon.Flaticon, // default icon nếu không có trong DB
    };
  });

  return <TestimonialStart testimonials={testimonials} />;
}
