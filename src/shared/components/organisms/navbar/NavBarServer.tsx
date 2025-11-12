import { prisma } from '@/core/lib/prisma';
import NavBar from '.';

export default async function NavBarServer() {
  const menus = await prisma.menu.findMany({
    where: { parentId: null, isActive: true },
    include: {
      children: {
        where: { isActive: true },
        orderBy: { sortOrder: 'asc' },
      },
    },
    orderBy: { sortOrder: 'asc' },
  });

const navItems = menus.map(menu => ({
  label: menu.label,
  href: menu.href || undefined,
  children: menu.children?.length
    ? menu.children.map(child => ({
        label: child.label,
        href: child.href || '#',
      }))
    : undefined,
}));


  return <NavBar items={navItems} />;
}
