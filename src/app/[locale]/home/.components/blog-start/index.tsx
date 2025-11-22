'use client';
import Image from "next/image";
import Text from "../../../../../shared/components/atoms/text";
import { Icon } from "../../../../../shared/components/atoms";
import { EIcon } from "@/shared/enums";
import "./style.scss";

type BlogPost = {
  id: string;
  image: string;
  date: string;
  category: string;
  title: string;
  link: string;
};

type BlogStartProps = {
  posts: BlogPost[];
};

export default function BlogStart({ posts }: BlogStartProps) {
  return (
    <section className="blog-start">
      <div className="container">
        {/* Title */}
        <div className="title">
          <Text as="h6">Recent Articles</Text>
          <Text as="h3">
            Innovation in Focus Stories <br />
            <Text as="span" className="subtitle">
              Updated From Lab
            </Text>
          </Text>
        </div>

        {/* Posts */}
        <div className="posts">
          {posts.map((post) => (
            <div className="post-card" key={post.id}>
              <div className="image">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={180}
                  height={180}
                  className="w-full h-auto"
                />
              </div>
              <div className="content">
                <div className="meta flex gap-4">
                  <div className="flex items-center gap-1">
                    <Icon name={EIcon.Calender} className="w-4 h-4" />
                    <Text as="span">{post.date}</Text>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name={EIcon.Tag} className="w-4 h-4" />
                    <Text as="span">{post.category}</Text>
                  </div>
                </div>

                <hr className="my-2" />

                <Text as="h6">{post.title}</Text>

                <Text as="a" href={post.link || "#"} className="read-more flex items-center gap-1">
                  Read more
                  <Icon name={EIcon.Arrow_Right} className="icon-arrow w-4 h-4" />
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
