This project is licensed under the [GNU AGPL-3.0](LICENSE) License. See the `LICENSE` file for details.

**DISCLAIMER: This project is currently not ready for production usage. It is a work-in-progress.**

This is a [Next.js](https://nextjs.org) project bootstrapped with [
`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically
optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for
more details.

# PlatinPay

Both @iUnstable0 and I (@DatCodeMania) have ran Minecraft servers before. Monetization is what keeps a server alive, but
it always seems to be so painful... When I ran my Minecraft server, I resorted to using Tebex. That was... not great.
Lots of their services were unmaintained, and the 'taxing' model was completely unfair. Moreover, custom HTML cost a
ton! Minecraft servers are already hard enough to keep afloat, I don't need a greedy company stealing my money!

Now, it's been a while since either of us ran a Minecraft server. But, the Minecraft payment service situation has stuck
with us to this day. So, we decided to make PlatinPay.

PlatinPay is an OSS alternative to Tebex and other such payment services. It is currently a WIP, but we aspire to use
Stripe for payment processing, as Stripe has some of the lowest fees in this field. If you selfhost the only additional
fees you will pay will be to Stripe (and, if applicable, your bank)

### NOTE: Not all features are implemented yet, and not every feature listed is finalized. This is a WIP project.

## PlatinPay's features:

- Create different types of products, such as one-time purchases, subscriptions, consumable items, and more!
- Integration with Discord for role rewards and communication  (for example, instead of setting up a
  mail server to send emails to your players, you can just send them a DM on Discord!)
- Easily create automations with our powerful, easy-to-learn, and extensible framework (e.g., when a purchase is made,
  do X and Y).

- High customizability to fulfill your pleasurable needs
- A beautiful, Nord-themed UI :3 (this is the default, but feel free to add alternatives and submit PRs)

## This project is far from done. Our Roadmap consists of:

- Porting backend to Go (or maybe rust uwu)
- Affordable hosting solutions for those who don't want to self-host/are unable to
- Better system infastructure (this project is kinda just a proof-of-concept rn so sum codes are a bit messy and not
  production ready and a lot of things are subject to change)

This project is licensed under the [GNU AGPL-3.0](LICENSE) License. See the `LICENSE` file for details.

**DISCLAIMER: This project is currently not ready for production usage. It is a work-in-progress.**