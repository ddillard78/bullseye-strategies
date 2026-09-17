# Bullseye Strategies

Marketing site for Bullseye Strategies, LLC — built with [Astro](https://astro.build)
and Tailwind CSS, deployed as a static site on Render.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Where the content lives

Most copy is centralised in **`src/data/site.ts`** — services, industries, the
Blueprint phases, awards, speaking, board service, and the attributed results.
Editing that file updates every page that consumes it. Page-specific prose lives
in the relevant file under `src/pages/`.

`BOOKING_URL` in that same file is the Google Calendar booking link used by every
"Book a Call" button.

## Things worth knowing before you edit

- **Marketing claims are checked against Douglas's CV.** The previous site
  overstated two figures (it said "EBITDA margin" where the CV says *gross
  profit* margin, and "600% growth" where the CV says $5M→$40M). Every statistic
  on the site now states its baseline and names the company it came from. Keep
  it that way.
- **`src/pages/data-security.astro` is read by client IT and audit teams.** It
  carries a `TRAINING_CLAIM_VERIFIED` flag. It is currently `true` because
  Bullseye runs an Anthropic **Team** plan (commercial terms, model-improvement
  training contractually excluded). If that plan ever changes, set the flag back
  to `false` before republishing — consumer plans are governed by different terms.
- **Motion respects `prefers-reduced-motion`.** Scroll-driven effects are behind
  an `@supports` guard and reveal animations are gated on a `js-ready` class, so
  a JS failure leaves content visible rather than blank. Don't remove that gate.
- **Images** go in `src/assets/` and are imported through `astro:assets`, which
  generates responsive WebP at build time. Don't put large source images in
  `public/` — they'd be served unoptimised.

## Contact form

Static hosting can't send email, so the form posts to [Web3Forms](https://web3forms.com),
which relays to the address on the account. The access key in
`src/pages/contact.astro` is public by design — that is how Web3Forms works for
static sites. Spam protection is a hidden honeypot field plus whatever is enabled
in the Web3Forms dashboard.

## Deployment

`render.yaml` is a Render Blueprint. In the Render dashboard: **New → Blueprint**,
point it at this repo, and it configures the static site, security headers, and
long-lived caching for fingerprinted assets automatically.

## `_reference/`

Source pages from the previous Replit-hosted site, kept for copy reference. Not
built, not deployed. Safe to delete once nothing is needed from it.
