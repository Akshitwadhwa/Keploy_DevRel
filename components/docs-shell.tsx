import type { ReactNode } from "react";
import { DocsNav } from "@/components/docs-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function DocsShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-full">
      <header className="docs-header">
        <div className="docs-header-bar">
          <a href="#what-you-are-building" className="docs-brand">
            <span className="docs-mark" aria-hidden>
              <span />
            </span>
            <span>
              <span className="docs-brand-title">mux-mysql notes</span>
              <span className="docs-brand-sub">Keploy on Apple Silicon</span>
            </span>
          </a>
          <div className="docs-header-actions">
            <a
              className="docs-repo-link"
              href="https://github.com/keploy/samples-go/tree/main/mux-mysql"
              target="_blank"
              rel="noreferrer"
            >
              Sample repo
            </a>
            <ThemeToggle />
          </div>
        </div>
        <div className="docs-header-nav">
          <DocsNav orientation="horizontal" />
        </div>
      </header>
      <div className="docs-frame">
        <aside className="docs-sidebar">
          <DocsNav />
        </aside>
        <article className="docs">
          {children}
          <footer className="docs-footer">
            Written from a native record of the mux-mysql sample with Keploy CLI 3.8.58.
            Replay passed after MySQL was stopped.
          </footer>
        </article>
      </div>
    </div>
  );
}
