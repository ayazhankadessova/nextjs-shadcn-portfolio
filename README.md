### About

This `NextJS` project is an attempt to clone [`GitRoll-blog`](https://gitroll.io/blog), bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), using `TailwindCSS`, `MDX`, `Contentlayer`, and `shadcn/ui` + `lucide-react` components.

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Code notes

1. burger btn not working
2. clean up code
3. headers const in smth else
4. start making posts
5. make 1 blog page
6. blog > [...slug] => we can read anything after /blog/...
7. add custom comps

fix:

1. [x] theme, search in navbar
2. [x] search
3. [x] Sort By
4. [x] theme
5. [x] button theme too big
6. [x] picture in post-item should be at the end
7. [x] add icons

bugs:

- [x] sometimes can't see mobilnav or texts
- [x] 404 page is white
- [x] line numbers not working in rehype
- [x] pagination height
- [ ] tags not grouped
- [x] light/dark mode
- [x] pagination logic
- [x] small screen, blog photo goes to up
- [ ] cache
- [ ] add new pics
- [ ] add more posts

Code review:

1. [x] The home page blog articles section isn't centered on larger screens
2. [x] Check this link to fix the export pattern in next config
3. [x] It is not advisable to ignore eslint when building the application, it can lead to technical debt as issues and problems in the codebase might go undetected; please fix the error in @/components/mdx-components.tsx
4. [x]The header looks nice and I like the dark mode toggle; but note that FAQ doesn't look consistent with Products and Our Story;
5. [x] also, the text for Contact Us isn't center aligned
6. [x] I would suggest to have the post date as a POSIX timestamp, so you could perform sorting and formatting easier
7. [x] I'd like to see you implement the copy share link to clipboard too
8. In mobile view, when you scroll down a little bit then open and close the mobile nav menu, the scroll position changes, which signals a re-render is triggered somewhere; try to fix this too
9. [x] Might as well pass in the whole post object into PostItem so that you don't have to declare and destructure so many props
10. [x] For the back button in your single blog page, I'd like to use router.back() instead of navigating back to /blog , so that it remembers your search params
