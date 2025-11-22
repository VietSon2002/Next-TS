import { prisma } from '@/core/lib/prisma';
import HeroSectionStartClient, { type Slide } from '@/app/[locale]/home/.components/hero-section-start';

export default async function HeroSectionStartServer() {
  // 1️⃣ Lấy tất cả posts section_hero đã publish
  const posts = await prisma.post.findMany({
    where: { sectionId: 'section_hero', status: 'published' },
    orderBy: { sortOrder: 'asc' },
    select: {
      id: true,
      title: true,
      excerpt: true,
      content: true,
      sortOrder: true,
    },
  });

  // 2️⃣ Transform posts + media
  const slidesWithNull = await Promise.all(
    posts.map(async (post) => {
      const media = await prisma.media.findFirst({
        where: { itemId: post.id, itemType: 'post' },
        orderBy: { sortOrder: 'asc' },
      });

      if (!media?.url) return null;

      return {
        id: post.id,
        title: post.title || 'No title',
        subtitle: post.excerpt || '',
        description: post.content || '',
        src: media.url,
        alt: media.altText || post.title || 'Hero image',
      };
    })
  );

  // 3️⃣ Filter null và ép kiểu Slide[]
  const slides: Slide[] = slidesWithNull.filter(
    (slide): slide is Slide => slide !== null
  );

  // 4️⃣ Nếu không có slides, return null
  if (!slides.length) return null;

  // 5️⃣ Return Client Component với props
  return <HeroSectionStartClient slides={slides} />;
}
