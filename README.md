# BJORNOS — Drum & Bass DJ (Astro + TypeScript + Tailwind)

Moderne, minimalistische artiestenwebsite in Astro met een donkere stijl, kosmisch oranje accent (#FF5E00), lichte scroll-animaties en MDX-blog.

Stack:
- Astro 4 + TypeScript
- Tailwind CSS (custom thema + Typography plugin)
- Motion One (lichte scroll/fade-in animaties)
- MDX blog (content collections)
- Netlify Forms (contact)
- Analytics hook (Plausible, eenvoudig te wisselen)

## Ontwikkelen

Vereist: Node 18+.

Installeren:
- npm install

Ontwikkelserver:
- npm run dev
- Open http://localhost:4321

Typecheck:
- npm run check

Build:
- npm run build
- npm run preview

## Content bewerken

Centrale config:
- src/config/site.ts
  - site.title, site.description
  - navLinks (navigatie)
  - socials (Instagram, SoundCloud, Spotify, TikTok)
  - contact.email
  - embeds.soundcloudTrackUrl (SOUND_CLOUD_URL)
  - embeds.spotifyEmbedSrc (SPOTIFY_EMBED_SRC)
  - analytics.plausibleDomain (voor Plausible; leeg laten om uit te schakelen)

Tour / Events:
- src/data/tour.json
  - Voeg of wijzig shows (date, city, venue, title, tickets).

Blog:
- src/content/blog/ (MDX)
  - Voorbeeld: energy-flow.mdx
  - Frontmatter:
    ---
    title: "Titel"
    description: "Korte teaser"
    date: 2025-01-01
    draft: false
    ---
  - Collectie-schema: src/content/config.ts

Muziek-embeds:
- SoundCloud en Spotify via src/config/site.ts (zie boven).

## Pagina’s

- / (Home): Hero + teasers + tour highlight + blog CTA
- /about (About)
- /music (SoundCloud speler + optionele Spotify embed)
- /tour (Aankomend + Geweest uit src/data/tour.json)
- /blog (Index van MDX posts)
- /blog/[slug] (Detailpagina)
- /contact (Netlify Forms — naam, email, bericht)
- /contact/success (Bedanktpagina)
- /404 (Niet gevonden)

## Styling & Animaties

- Tailwind thema in tailwind.config.cjs:
  - Donkere basis (#0a0a0a), tekst wit, accent #FF5E00
  - Fonts: Space Grotesk (headings), Inter (body)
- Globale CSS: src/styles/globals.css (inclusief subtiele glows)
- Animaties: Motion One via data-reveal attributen
  - Script: src/scripts/reveal.ts (geïncludeerd in layout)
  - Gebruik data-reveal en optioneel data-delay="0.1" (seconden)

## SEO & Analytics

- SEO component: src/components/SEO.astro
  - Zet title/description/ogImage per pagina via layout props
  - Standaard ogImage: /og.svg (dynamisch endpoint)
- Analytics (Plausible):
  - Zet je domein in src/config/site.ts (analytics.plausibleDomain)
  - Leeg laten = script niet injecteren

Open Graph & Favicon:
- /favicon.svg en /og.svg via Astro endpoints:
  - src/pages/favicon.svg.ts
  - src/pages/og.svg.ts
  - Makkelijk aanpasbaar, geen publieke statische assets nodig.

## Contactformulier (Netlify Forms)

- /contact bevat:
  - form name="contact"
  - hidden input form-name=contact
  - netlify en netlify-honeypot ingeschakeld
  - success redirect naar /contact/success

Alternatief Formspark:
- Vervang form action door je Formspark endpoint
- Verwijder Netlify hidden inputs.

## Deploy

- Netlify: zet build command op `npm run build`, publish directory op `dist/`.
- Vercel: Astro wordt automatisch gedetecteerd.
- Static hosting: upload de `dist/` map.

## Performance & Accessibility

- Donkere, contrastrijke kleuren en focus states
- Skiplink naar #main
- Lichte animaties met Motion One
- Fonts via Google Fonts, minimal layout shifts
- Verwachte Lighthouse > 90 (Performance/Accessibility/Best Practices/SEO).
  - Tips: zet een lokaal font-cache policy, beeldgroottes optimaliseren, domain in Plausible juist configureren.

## Bestandenstructuur (belangrijkste)

- astro.config.mjs — Integraties (Tailwind, MDX)
- tailwind.config.cjs — Thema + typography plugin
- postcss.config.cjs — PostCSS pipeline
- tsconfig.json — TS + path alias @/*
- src/styles/globals.css — globale stijlen
- src/layouts/Layout.astro — basislayout + SEO + analytics + animatiescript
- src/components/* — Navbar, Footer, SEO, SocialIcons, Hero
- src/pages/* — pagina’s incl. 404 en contact/success
- src/pages/favicon.svg.ts — dynamisch favicon endpoint
- src/pages/og.svg.ts — dynamisch OG-image endpoint
- src/content/blog/* — MDX posts
- src/content/config.ts — content collections schema
- src/data/tour.json — events data
- src/scripts/reveal.ts — Motion One scroll/fade-in

## Licentie

Copyright © 2025 Bjornos. Website by TwinPixel.
