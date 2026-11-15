# The Black Parade Wiki

Fan-made My Chemical Romance wiki and blog. Next.js (App Router), Tailwind, TypeScript. Unofficial, not affiliated with the band.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Content

- Albums, members: `lib/data.ts`. Images in `public/albums` and `public/members`.
- Timeline: `app/timeline/page.tsx`.
- Blog: add a markdown file to `content/posts/` with `title`, `date`, `excerpt`, `tags` frontmatter. A tag matching an album's `tag` shows that cover.
