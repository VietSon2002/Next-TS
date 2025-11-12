import bcrypt from 'bcrypt';
import { PrismaClient } from './.generated';

const prisma = new PrismaClient();

const slides = [
  {
    src: '/assets/images/banner/01.png',
    alt: 'Ảnh 1',
    subtitle: 'Lab Research Excellence',
    title: 'High Laboratory Quality Services',
    description: 'Welcome to our research laboratory center...',
  },
  {
    src: '/assets/images/banner/02.png',
    alt: 'Ảnh 2',
    subtitle: 'Advanced Medical Tests',
    title: 'Trusted Diagnostics Quality Services',
    description: 'We deliver reliable lab test results with precision...',
  },
];

async function seedSlides(heroSectionId: string) {
  for (const [i, slide] of slides.entries()) {
    const postId = `post_slide_${i + 1}`;
    const mediaId = `media_slide_${i + 1}`;

    // 1️⃣ Tạo Post slide
    const post = await prisma.post.upsert({
      where: { id: postId },
      update: {
        title: slide.title,
        excerpt: slide.subtitle,
        content: slide.description,
        sortOrder: i,
        status: 'published',
      },
      create: {
        id: postId,
        sectionId: heroSectionId,
        title: slide.title,
        slug: `hero-slide-${i + 1}`,
        excerpt: slide.subtitle,
        content: slide.description,
        status: 'published',
        sortOrder: i,
      },
    });

    // 2️⃣ Tạo Media slide (polymorphic, không FK cứng)
    await prisma.media.upsert({
      where: { id: mediaId },
      update: {
        url: slide.src,
        altText: slide.alt,
        sortOrder: i + 1,
      },
      create: {
        id: mediaId,
        itemId: post.id,
        itemType: 'post', // polymorphic
        url: slide.src,
        altText: slide.alt,
        type: 'image',
        sortOrder: i + 1,
      },
    });
  }

  console.log('✅ Slides seeded successfully!');
}

async function main() {
  // ======================================================
  // 1️⃣ Seed Admin User
  // ======================================================
  const admin = await prisma.user.upsert({
    where: { email: 'admin@gmail.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@gmail.com',
      hashedPassword: await bcrypt.hash('Password1!', 10),
    },
  });
  console.log('✅ User seeded:', admin.email);

  // ======================================================
  // 2️⃣ Seed Menu
  // ======================================================
  const navItems = [ { label: 'HOME', children: [ { label: 'HOME 01', href: '/home-01' }, { label: 'HOME 02', href: '/home-02' }, { label: 'HOME 03', href: '/home-03' }, { label: 'HOME 04', href: '/home-04' }, ], }, { label: 'PAGES', children: [ { label: 'ABOUT US', href: '/about-us' }, { label: 'TEAM', href: '/team' }, { label: 'TEAM SINGLE', href: '/team-single' }, { label: 'PRICE TABLE', href: '/price-table' }, { label: 'FAQ', href: '/faq' }, { label: 'LOGIN', href: '/login' }, { label: 'COMING SOON', href: '/coming-soon' }, { label: 'ERROR 404', href: '/404' }, ], }, { label: 'SHOP', children: [ { label: 'PRODUCT GRID', href: '/product-grid' }, { label: 'PRODUCT LIST', href: '/product-list' }, { label: 'PRODUCT SINGLE', href: '/product-single' }, { label: 'CART', href: '/cart' }, { label: 'CHECK OUT', href: '/checkout' }, { label: 'ORDER COMPLETED', href: '/order-completed' }, { label: 'FORGOT PASSWORD', href: '/forgot-password' }, ], }, { label: 'SERVICES', children: [ { label: 'SERVICE STYLE ONE', href: '/service-1' }, { label: 'SERVICE STYLE TWO', href: '/service-2' }, { label: 'SERVICE STYLE THREE', href: '/service-3' }, { label: 'SERVICE SINGLE', href: '/service-single' }, ], }, { label: 'RESEARCH', children: [ { label: 'RESEARCH MASONRY', href: '/research-masonry' }, { label: 'RESEARCH GRID 2', href: '/research-grid-2' }, { label: 'RESEARCH GRID 3', href: '/research-grid-3' }, { label: 'RESEARCH SLIDER', href: '/research-slider' }, { label: 'RESEARCH SINGLE', href: '/research-single' }, ], }, { label: 'BLOGS', children: [ { label: 'BLOG LEFT SIDEBAR', href: '/blog-left' }, { label: 'BLOG RIGHT SIDEBAR', href: '/blog-right' }, { label: 'BLOG SINGLE', href: '/blog-single' }, ], }, { label: 'CONTACT', href: '/contact' }, ];

  console.log('⏳ Seeding menu...');
  for (const [i, parent] of navItems.entries()) {
    const parentMenu = await prisma.menu.upsert({
      where: { id: `menu_parent_${i + 1}` },
      update: {},
      create: {
        id: `menu_parent_${i + 1}`,
        label: parent.label,
        href: parent.href || null,
        sortOrder: i,
        isActive: true,
      },
    });

    if (parent.children?.length) {
      for (const [j, child] of parent.children.entries()) {
        await prisma.menu.upsert({
          where: {
            parentId_label: { parentId: parentMenu.id, label: child.label },
          },
          update: {},
          create: {
            label: child.label,
            href: child.href,
            parentId: parentMenu.id,
            sortOrder: j,
            isActive: true,
          },
        });
      }
    }
  }
  console.log('✅ Menu seeded successfully!');

  // ======================================================
  // 3️⃣ Seed Home Page + Hero Section + Slides
  // ======================================================
  const homePage = await prisma.page.upsert({
    where: { id: 'page_home' },
    update: { title: 'Home', excerpt: 'Trang chủ', isPublished: true },
    create: { id: 'page_home', slug: 'home', title: 'Home', excerpt: 'Trang chủ', isPublished: true },
  });

  const heroSection = await prisma.section.upsert({
    where: { id: 'section_hero' },
    update: { title: 'Hero Section', excerpt: 'Banner chính', sortOrder: 0, isActive: true },
    create: { id: 'section_hero', pageId: homePage.id, title: 'Hero Section', excerpt: 'Banner chính', sortOrder: 0, isActive: true },
  });

  await seedSlides(heroSection.id);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
