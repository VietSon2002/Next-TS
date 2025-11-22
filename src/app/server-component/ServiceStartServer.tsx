import { prisma } from '@/core/lib/prisma';
import ServiceStart from '@/app/[locale]/home/.components/service-start';
import { EIcon } from '@/shared/enums';

export default async function ServiceStartServer() {
  const posts = await prisma.post.findMany({
    where: { sectionId: 'section_service', status: 'published' },
    orderBy: { sortOrder: 'asc' },
  });

  const media = await prisma.media.findMany({
    where: { itemType: 'post' },
  });

  const services = posts.map((post) => {
    const image = media.find((m) => m.itemId === post.id);

    return {
      image: image?.url || '',
      icon: EIcon[post.icon as keyof typeof EIcon] ?? EIcon.Business_Money,
      title: post.title,
      description: post.excerpt ?? '',
      link: '#',
    };
  });

  return <ServiceStart services={services} />;
}
