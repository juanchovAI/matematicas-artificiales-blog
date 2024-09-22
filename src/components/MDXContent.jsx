import React from "react";
import { MDXProvider } from "@mdx-js/react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const components = {};

const MDXContent = ({ children }) => (
  <MDXProvider components={components}>
    <ReactMarkdown
      children={children}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    />
  </MDXProvider>
);

export default MDXContent;
