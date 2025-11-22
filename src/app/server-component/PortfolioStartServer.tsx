import { prisma } from "@/core/lib/prisma";
import PortfolioStart from "@/app/[locale]/home/.components/portfolio-start";

export default async function PortfolioStartServer() {
    const posts = await prisma.post.findMany({
        where: { sectionId: "section_portfolio", status: "published" },
        orderBy: { sortOrder: "asc" },
    });

    const postIds = posts.map(p => p.id);

    const media = await prisma.media.findMany({
        where: {
            itemType: "post",
            itemId: { in: postIds },
        },
    });

    const portfolioItems = posts.map(post => {
        const image = media.find(m => m.itemId === post.id);

        const img =
            image?.url && image.url.trim() !== ""
                ? image.url
                : "/assets/images/portfolio/portfolio-1.jpg";

        return {
            id: post.id,
            img,
            category: post.excerpt || "",
            title: post.title,
            link: `/portfolio/${post.slug}`,
        };
    });

    return <PortfolioStart portfolioItems={portfolioItems} />;
}
