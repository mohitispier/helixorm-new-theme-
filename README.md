This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Production configuration

Set `NEXT_PUBLIC_SITE_URL` to the production origin (for example,
`https://www.example.com`) so canonical URLs, `robots.txt`, and `sitemap.xml`
use the deployed domain. The site defaults to `https://helixorm.com`.

The contact and reputation-audit forms submit to a server-side webhook. Set
`HELIXORM_INQUIRY_WEBHOOK_URL` to an HTTPS endpoint that accepts JSON `POST`
requests and returns a 2xx response after accepting the inquiry. Optionally set
`HELIXORM_INQUIRY_WEBHOOK_SECRET`; it is sent as a Bearer token and is never
exposed to the browser. The payload contains a `type` (`contact` or `audit`),
the submitted form fields, and a server-generated `submittedAt` timestamp.

Until the receiving endpoint is configured and successfully accepts a request,
the forms show an explicit error with a direct email alternative; they do not
display a false confirmation. Before publishing the privacy policy and terms,
review them against the actual legal entity, jurisdiction, form processor, and
data-retention settings.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
