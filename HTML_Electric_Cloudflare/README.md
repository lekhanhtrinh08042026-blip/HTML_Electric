# HTML Electric — Cloudflare Workers

Upload the CONTENTS of this folder to the repository root. Do not upload the ZIP itself.

Expected repository structure:
- wrangler.jsonc
- public/index.html
- public/catalog.js
- public/app/
- public/machines/F3/

Cloudflare settings:
- Build command: leave empty
- Deploy command: npx wrangler deploy
- Root directory: /
- Preview builds: disabled

Configure Cloudflare Access for production before sharing the app. Static assets alone do not implement login. Keep the GitHub repository private if the source documents are internal.

Model update instructions are in HUONG_DAN.md.
