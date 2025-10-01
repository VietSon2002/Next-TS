import Image from "next/image";
import Text from "../../../../../shared/components/atoms/text";
import "./style.scss";
import { EIcon } from "@/shared/enums";
import { Icon } from "../../../../../shared/components/atoms";

const posts = [
  {
    id: 1,
    image: "/assets/images/blog-start.png",
    date: "10 March, 2025",
    category: "Biochemistry",
    title: "The Role of Medical Laboratories in Infectious Disease Testing",
  },
  {
    id: 2,
    image: "/assets/images/blog-start.png",
    date: "10 March, 2025",
    category: "Biochemistry",
    title: "The Role of Medical Laboratories in Infectious Disease Testing",
  },
  {
    id: 3,
    image: "/assets/images/blog-start.png",
    date: "10 March, 2025",
    category: "Biochemistry",
    title: "The Role of Medical Laboratories in Infectious Disease Testing",
  },
];

const BlogStart = () => {
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
                />
              </div>
              <div className="content">
                <div className="meta">
                  <div className="flex items-center gap-1">
                    <Icon name={EIcon.Calender} className="w-4 h-4" />
                    <Text as="span">{post.date}</Text>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name={EIcon.Tag} className="w-4 h-4" />
                    <Text as="span">{post.category}</Text>
                  </div>
                </div>

                <hr />

                <Text as="h6">{post.title}</Text>

                <Text as="a" href="#" className="read-more">
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
};

export default BlogStart;
