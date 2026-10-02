# mux-mysql notes

A single-page documentation site for a Keploy recording of the Mux + MySQL URL shortener (`mux-mysql` in [keploy/samples-go](https://github.com/keploy/samples-go)).

The tutorial is `app/page.mdx`. It walks through a native record on an Apple Silicon Mac: start MySQL, build the Go binary, record two HTTP calls, stop MySQL, and replay. The replay passes because Keploy mocks MySQL.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Production build

```bash
npm run build
```

The build writes a static site to `out/`. Serve that folder with any static file server. This repo is not set up to deploy.

## Stack

Next.js, MDX, Tailwind CSS, and shadcn/ui. Syntax highlighting runs at build time with Shiki. A control in the header switches light and dark.
