## Introduction

The purpose of this basic CRUD project is to demonstrate an understanding of the client-server architecture, where a React client calls an API (Next.js routes), along with an understanding of third-party platform (PlanetScale) and library (PrismaORM) integrations.

## Tech stack used

- [`React (Next.js)`](https://nextjs.org/docs)
- [`TailwindCSS`](https://tailwindcss.com/)
- [`PrismaORM`](https://www.prisma.io/)
- [`PlanetScale`](https://planetscale.com/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Vercel deployment

- Make sure to include in your environment variables the `DATABASE_URL`.
- The live link is available here: [`production`](https://prisma-planetscale-todo.vercel.app/).
