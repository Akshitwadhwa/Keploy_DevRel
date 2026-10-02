import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import { Callout } from "@/components/callout";
import { RunMeta } from "@/components/run-meta";

function Anchor({ href, children, ...props }: ComponentPropsWithoutRef<"a">) {
  const external = typeof href === "string" && href.startsWith("http");

  return (
    <a
      href={href}
      {...props}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: Anchor,
    Callout,
    RunMeta,
    ...components,
  };
}
