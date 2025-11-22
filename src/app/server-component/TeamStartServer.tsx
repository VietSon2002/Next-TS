import { prisma } from "@/core/lib/prisma";
import TeamStart from "@/app/[locale]/home/.components/team-start";

export default async function TeamStartServer() {
  const posts = await prisma.post.findMany({
    where: { sectionId: "section_team", status: "published" },
    orderBy: { sortOrder: "asc" },
  });

  const postIds = posts.map(p => p.id);

  const media = await prisma.media.findMany({
    where: {
      itemType: "post",
      itemId: { in: postIds },
    },
  });

  const teamMembers = posts.map(post => {
    const avatar = media.find(m => m.itemId === post.id);
    const avatarUrl = avatar?.url?.trim();
    return {
      id: post.id,
      name: post.title,
      role: post.excerpt ?? "",
      avatar: avatarUrl && avatarUrl !== "" 
          ? avatarUrl 
          : "/assets/images/avatar/avatar-2.png",
    };
  });

  return <TeamStart teamMembers={teamMembers} />;
}
