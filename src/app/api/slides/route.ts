import type { NextRequest } from 'next/server';
import { prisma } from '@/core/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    console.log('Fetching slides from database...');

    // Bước 1: Lấy tất cả posts trong section_hero
    const posts = await prisma.post.findMany({
      where: { 
        sectionId: 'section_hero', 
        status: 'published' 
      },
      orderBy: { sortOrder: 'asc' },
      select: {
        id: true,
        title: true,
        excerpt: true,
        content: true,
        sortOrder: true,
      },
    });

    console.log('Posts found:', posts.length);

    if (posts.length === 0) {
      console.log('No posts found in section_hero');
      return new Response(JSON.stringify([]), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Bước 2: Lấy media cho từng post
    const postsWithMedia = await Promise.all(
      posts.map(async (post) => {
        const media = await prisma.media.findFirst({
          where: { 
            itemId: post.id, 
            itemType: 'post' 
          },
          orderBy: { sortOrder: 'asc' },
        });

        return {
          post,
          media
        };
      })
    );

    // Bước 3: Transform data và filter
    const data = postsWithMedia
      .map(({ post, media }) => {
        // Chỉ return slide nếu có media URL
        if (!media?.url) {
          console.log(`No media found for post: ${post.id}`);
          return null;
        }

        return {
          id: post.id,
          title: post.title || 'No title',
          subtitle: post.excerpt || '',
          description: post.content || '',
          src: media.url,
          alt: media.altText || post.title || 'Hero image',
        };
      })
      .filter((slide): slide is NonNullable<typeof slide> => slide !== null);

    console.log(`Processed ${data.length} slides with media`);

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Error fetching slides:', err);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch slides' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}