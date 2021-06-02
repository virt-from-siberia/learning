import PostsGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";

const DUMMY_POSTS = [
  {
    title: "Getting started with next js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next js is a React framework for productions - it makes building fullstack React apps and sites ships with build SRR",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs1",
  },
  {
    title: "Getting started with next js 2",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next js is a React framework for productions - it makes building fullstack React apps and sites ships with build SRR",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs2",
  },
  {
    title: "Getting started with next js 3",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next js is a React framework for productions - it makes building fullstack React apps and sites ships with build SRR",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs3",
  },
  {
    title: "Getting started with next js 4",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next js is a React framework for productions - it makes building fullstack React apps and sites ships with build SRR",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs4",
  },
];

function FeaturedPosts(posts) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={DUMMY_POSTS} />
    </section>
  );
}

export default FeaturedPosts;
