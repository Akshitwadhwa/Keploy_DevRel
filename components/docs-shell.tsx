import type { ReactNode } from "react";
import { DocsNav } from "@/components/docs-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function DocsShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-full">
      <header className="docs-header">
        <div className="docs-header-bar">
          <a href="#the-app" className="docs-brand">
            <span className="docs-mark" aria-hidden>
              <span />
            </span>
            <span>
              <span className="docs-brand-title">mux-mysql notes</span>
              <span className="docs-brand-sub">Record once. Replay without MySQL.</span>
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
            Real Mux handlers. Captured MySQL. No database on replay.
          </footer>
        </article>
      </div>
    </div>
  );
}
