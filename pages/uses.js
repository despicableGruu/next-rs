import MetaData from "@components/MetaData";
import MDXComponents from "@components/MDXComponents";
import PageTop from "@components/PageTop";
import { getPostFromSlug } from "@lib/posts";
import { pagePreviewImage } from "@utils/utils";
import styles from "@styles/Uses.module.css";

import { MDXRemote } from "next-mdx-remote";
import "highlight.js/styles/atom-one-dark.css";

export default function Uses({ post }) {
  return (
    <>
      <MetaData
        title={post.meta.title + " -"}
        description={post.meta.excerpt}
        previewImage={pagePreviewImage.uses}
      />

      <section className="pageTop font-inter">
        <PageTop pageTitle={post.meta.title}>{post.meta.excerpt}</PageTop>

        <div
          className={`${styles.uses} !w-full  selection:bg-blue-300 dark:selection:bg-blue-900 dark:selection:text-gray-400 dark:text-neutral-200 my-2 font-medium`}
        >
          <MDXRemote
            {...post.source}
            frontmatter={post.meta}
            components={MDXComponents}
          />
          <p> Last Update on {post.meta.stringDate}</p>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const { content: source, meta } = await getPostFromSlug("/page/uses", true);
  return {
    props: {
      post: {
        meta,
        source,
      },
    },
  };
}
