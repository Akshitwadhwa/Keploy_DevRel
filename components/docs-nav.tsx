"use client";

import { useEffect, useState } from "react";
import { sections } from "@/lib/sections";
import { cn } from "@/lib/utils";

export function DocsNav({ orientation = "vertical" }: { orientation?: "vertical" | "horizontal" }) {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const headings = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);

    if (headings.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: [0, 1] },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="On this page"
      className={cn(orientation === "horizontal" ? "docs-nav-bar" : "docs-nav")}
    >
      {orientation === "vertical" ? <p className="docs-nav-label">On this page</p> : null}
      <ul>
        {sections.map((section) => {
          const current = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={current ? "location" : undefined}
                className={cn(current && "is-active")}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
