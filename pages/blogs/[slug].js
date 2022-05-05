import { useEffect, useState } from "react";
import Metadata from "../../components/MetaData";

import { getPostFromSlug, getSlugs } from "../../lib/posts";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeTitles from "rehype-code-titles";
import BlogLayout from "../../layout/BlogLayout";
import "highlight.js/styles/atom-one-dark.css";

// Components for MDX
import Codepen from "../../components/Embed/Codepen";

export default function Post({ post }) {
  const [scroll, setScroll] = useState(0);

  const progressBarHandler = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight}`;

    setScroll(scroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", progressBarHandler);
    return () => window.removeEventListener("scroll", progressBarHandler);
  }, [progressBarHandler]);

  return (
    <>
      <Metadata title={post.meta.title} />
      <div
        className="!fixed left-0 w-full h-1 bg-blue-600 origin-top-left  transform duration-300 top-[52px] sm:top-[72px]"
        style={{
          transform: `scale(${scroll},1)`,
          zIndex: 1000,
        }}
      />
      <BlogLayout post={post}>
        <MDXRemote
          {...post.source}
          frontmatter={post.meta}
          components={{ Codepen }}
        />
      </BlogLayout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behaviour: "wrap" }],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });
  return {
    props: {
      post: {
        meta,
        source: mdxSource,
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
