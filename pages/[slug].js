import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Head from "next/head";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map(fileName => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.metaDesc} />
      </Head>
      <div className="prose mx-auto px-4 max-w-3xl">
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </>
  );
}
