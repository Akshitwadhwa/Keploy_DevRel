import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      [
        "rehype-pretty-code",
        {
          theme: {
            dark: "github-dark-dimmed",
            light: "github-light",
          },
          keepBackground: false,
          bypassInlineCode: true,
        },
      ],
    ],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  reactStrictMode: true,
  // The dev server is opened at 127.0.0.1. Without this, Next blocks the
  // dev websocket and the page never hydrates, so the theme toggle does nothing.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default withMDX(nextConfig);
