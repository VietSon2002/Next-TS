// import { NextResponse } from 'next/server';
// import { prisma } from '@/core/lib/prisma';

// export async function GET() {
//   const menus = await prisma.menu.findMany({
//     where: { parentId: null, isActive: true },
//     include: {
//       children: {
//         where: { isActive: true },
//         orderBy: { sortOrder: 'asc' },
//       },
//     },
//     orderBy: { sortOrder: 'asc' },
//   });

//   const navItems = menus.map(menu => ({
//     label: menu.label,
//     href: menu.href || '#',
//     children: menu.children.map(child => ({
//       label: child.label,
//       href: child.href || '#',
//     })),
//   }));

//   return NextResponse.json(navItems);
// }
