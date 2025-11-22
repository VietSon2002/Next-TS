import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { slides, features, services, navItems, teamMembers, portfolioItems, testimonials, posts } from "./seed-data";

const prisma = new PrismaClient();

// ================= Helpers =================
interface UpsertPostArgs {
  id: string;
  sectionId: string;
  title: string;
  excerpt: string;
  content?: string;
  slug: string;
  icon?: string | null;
  image?: string | null;
  sortOrder: number;
}

async function upsertPostWithMedia({
  id,
  sectionId,
  title,
  excerpt,
  content = "",
  slug,
  icon,
  image,
  sortOrder,
}: UpsertPostArgs) {
  const post = await prisma.post.upsert({
    where: { id },
    update: { title, excerpt, content, icon, slug, sortOrder, status: "published" },
    create: {
      id,
      sectionId,
      title,
      excerpt,
      content,
      icon,
      slug,
      sortOrder,
      status: "published",
    },
  });

  if (image) {
    await prisma.media.upsert({
      where: { id: `${id}_media` },
      update: { url: image, sortOrder: sortOrder + 1 },
      create: {
        id: `${id}_media`,
        itemId: post.id,
        itemType: "post",
        url: image,
        type: "image",
        sortOrder: sortOrder + 1,
      },
    });
  }

  return post;
}


// ================= Seed Slides =================
async function seedSlides(sectionId: string) {
  for (const [i, slide] of slides.entries()) {
    await upsertPostWithMedia({
      id: `slide_${i + 1}`,
      sectionId,
      title: slide.title,
      excerpt: slide.subtitle,
      slug: `hero-slide-${i + 1}`,
      content: slide.description,
      image: slide.src,
      sortOrder: i,
    });
  }
  console.log("✅ Slides seeded");
}

// ================= Seed Features =================
async function seedFeatures(sectionId: string) {
  for (const [i, feature] of features.entries()) {
    await upsertPostWithMedia({
      id: `feature_${i + 1}`,
      sectionId,
      title: feature.title,
      excerpt: feature.description,
      slug: `feature-${i + 1}`,
      icon: feature.icon,
      sortOrder: i,
    });
  }
  console.log("✅ Features seeded");
}

// ================= Seed Services =================
async function seedServices(sectionId: string) {
  for (const [i, service] of services.entries()) {
    await upsertPostWithMedia({
      id: `service_${i + 1}`,
      sectionId,
      title: service.title,
      excerpt: service.description,
      slug: `service-${i + 1}`,
      icon: service.icon,
      image: service.image,
      sortOrder: i,
    });
  }
  console.log("✅ Services seeded");
}

// ================= Seed Menu =================
async function seedMenu() {
  for (const [i, parent] of navItems.entries()) {
    const parentId = `menu_parent_${i + 1}`;

    const parentMenu = await prisma.menu.upsert({
      where: { id: parentId },
      update: {},
      create: {
        id: parentId,
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
            parentId_label: {
              parentId: parentMenu.id,
              label: child.label,
            },
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

  console.log("✅ Menu seeded");
}

// ================= Seed team members =================
async function seedTeam(sectionId: string) {
  for (const [i, member] of teamMembers.entries()) {
    await upsertPostWithMedia({
      id: `team_member_${i + 1}`,
      sectionId,
      title: member.name,
      excerpt: member.role,
      slug: `team-member-${i + 1}`,
      image: member.avatar,
      sortOrder: i,
    });
  }
  console.log("✅ Team members seeded");
}

// ================= Seed portfolio items =================
async function seedPortfolio(sectionId: string) {
  for (const [i, item] of portfolioItems.entries()) {
    await upsertPostWithMedia({
      id: `portfolio_item_${i + 1}`,
      sectionId,
      title: item.title,
      excerpt: item.category,
      slug: `portfolio-item-${i + 1}`,
      image: item.img,
      sortOrder: i,
    });
  }
  console.log("✅ Portfolio items seeded");
}

// ================= Seed testimonials =================
async function seedTestimonials(sectionId: string) {
  for (const [i, t] of testimonials.entries()) {
    await upsertPostWithMedia({
      id: `testimonial_${i + 1}`,
      sectionId,
      title: t.name,
      excerpt: t.role,
      slug: `testimonial-${i + 1}`,
      content: t.comment,
      image: t.avatar,
      sortOrder: i,
    });
  }
  console.log("✅ Testimonials seeded");
}

// ================= Seed blog posts =================
async function seedBlogPosts(sectionId: string) {
  for (const [i, post] of posts.entries()) {
    await upsertPostWithMedia({
      id: `blog_post_${i + 1}`,
      sectionId,
      title: post.title,
      excerpt: `${post.category} - ${post.date}`,
      slug: `blog-post-${i + 1}`,
      image: post.image,
      sortOrder: i,
    });
  }
  console.log("✅ Blog posts seeded");
} 
// ================= MAIN =================
async function main() {
  // 1. Admin
  const admin = await prisma.user.upsert({
    where: { email: "admin@gmail.com" },
    update: {},
    create: {
      name: "Admin User",
      email: "admin@gmail.com",
      hashedPassword: await bcrypt.hash("Password1!", 10),
    },
  });
  console.log("✅ Admin created:", admin.email);

  // 2. Menu
  await seedMenu();

  // 3. Home page
  const homePage = await prisma.page.upsert({
    where: { id: "page_home" },
    update: {},
    create: {
      id: "page_home",
      slug: "home",
      title: "Home",
      excerpt: "Trang chủ",
      isPublished: true,
    },
  });

  // 4. Hero
  const hero = await prisma.section.upsert({
    where: { id: "section_hero" },
    update: {},
    create: {
      id: "section_hero",
      pageId: homePage.id,
      title: "Hero Section",
      excerpt: "Banner chính",
      sortOrder: 0,
      isActive: true,
    },
  });
  await seedSlides(hero.id);

  // 5. Features
  const feature = await prisma.section.upsert({
    where: { id: "section_feature" },
    update: {},
    create: {
      id: "section_feature",
      pageId: homePage.id,
      title: "Feature Section",
      sortOrder: 1,
      isActive: true,
    },
  });
  await seedFeatures(feature.id);

  // 6. Services
  const service = await prisma.section.upsert({
    where: { id: "section_service" },
    update: {},
    create: {
      id: "section_service",
      pageId: homePage.id,
      title: "Service Section",
      sortOrder: 2,
      isActive: true,
    },
  });
  await seedServices(service.id);

  // 7. Team
  const team = await prisma.section.upsert({
    where: { id: "section_team" },
    update: {},
    create: {
      id: "section_team",
      pageId: homePage.id,
      title: "Team Section",
      sortOrder: 3,
      isActive: true,
    },
  });
  await seedTeam(team.id);

  // 8. Portfolio
  const portfolio = await prisma.section.upsert({
    where: { id: "section_portfolio" },
    update: {},
    create: {
      id: "section_portfolio",
      pageId: homePage.id,
      title: "Portfolio Section",
      sortOrder: 4,
      isActive: true,
    },
  });
  await seedPortfolio(portfolio.id);

  // 9. Testimonials
  const testimonial = await prisma.section.upsert({
    where: { id: "section_testimonial" },
    update: {},
    create: {
      id: "section_testimonial",
      pageId: homePage.id,
      title: "Testimonial Section",
      sortOrder: 5,
      isActive: true,
    },
  });
  await seedTestimonials(testimonial.id);

  // 10. Blog Posts
  const blog = await prisma.section.upsert({
    where: { id: "section_blog" },
    update: {},
    create: {
      id: "section_blog",
      pageId: homePage.id,
      title: "Blog Section",
      sortOrder: 6,
      isActive: true,
    },
  });
  await seedBlogPosts(blog.id); 
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
