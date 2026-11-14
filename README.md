# AI Lab Pro UI

Static dashboard UI for **AI Lab Pro** — agents, DevOps views, and monitoring surfaces.

**Live:** https://ai-lab-pro.pages.dev/

## Stack

- HTML / CSS / JavaScript
- Webpack (dev + production configs)

## Settings (Local LAN)

In **Settings → Local**, set **Local host / IP** (Base Domain is hidden). In **Server**, set **Base Domain** (Local host / IP is hidden). Local links use `http://<host>:<port>`.

## Run locally

```bash
npm install
npm start
```

Build for production:

```bash
npm run build
```

Deploy the built (or source) `js/app.js` and HTML into AI Lab Pro’s `nginx/html/` when publishing the dashboard.

## License

See `LICENSE.txt`.
