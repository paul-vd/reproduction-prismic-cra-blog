import { PrismicLink } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { PostDate } from "./PostDate";
import { FirstParagraph } from "./FirstParagraph";

const fixPost = (post) => {
  const clonedPost = { ...post };
  clonedPost.url = post.url + ".html";
  return clonedPost;
};

/**
 * Post list item component
 */
export const PostItem = ({ post }) => {
  const title = prismicH.asText(post.data.title) || "Untitled";

  return (
    <div className="blog-post">
      <PrismicLink document={post}>
        <h2 style={{ color: "red" }}>❌ {title}</h2>
      </PrismicLink>
      <PrismicLink document={fixPost(post)}>
        <h2 style={{ color: "green" }}>✅ {title}</h2>
      </PrismicLink>

      <PostDate date={post.data.date} />

      <FirstParagraph sliceZone={post.data.body} textLimit={300} />
    </div>
  );
};
