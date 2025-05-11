This app is deployed on [https://online-med-test.vercel.app](https://online-med-test.vercel.app) using vercel and the project is bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Things to note

There are a few decisions that were made and should be noted. 

- There are two pages, the first can be found on [/request/order](https://online-med-test.vercel.app/request/order), and its also the default page
- The second can be found on [/request/refund](https://online-med-test.vercel.app/request/refund)
- The refund page has a fully functioning file browser and a drag and drop implementation
- The help Icon on the bottom right has a little animation on hover
- Both pages are responsive on mobile and tablets
- There are tests written for some of the components, you can see them in the /components/__tests__ folder
- You can also run the tests with `npm run test`
- The fonts were downloaded and imported onto the project
- The project is using tailwind V4 and there is a theme setup in the global.css file
- The project is also using the app router of Nextjs
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
