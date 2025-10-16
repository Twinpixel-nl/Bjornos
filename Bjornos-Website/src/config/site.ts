/**
 * Centrale configuratie voor content en links.
 * Pas deze waarden aan om de website te personaliseren zonder in componenten te zoeken.
 */
export const site = {
  title: "BJORNOS — Drum & Bass DJ",
  description:
    "Ik breng energie en flow naar elke set. Professionele drum & bass DJ voor clubs en festivals.",
  domain: "bjornos.example",
  author: "Bjornos",
  year: 2025
};

export const navLinks: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/music", label: "Music" },
  { href: "/tour", label: "Tour" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Book Me" }
];

export const socials = {
  // Vul je echte profielen in:
  instagram: "https://instagram.com/bjornos",
  soundcloud: "https://soundcloud.com/bjornos",
  spotify: "https://open.spotify.com/artist/000000000000000", // vervang met echte artist/playlist URL
  tiktok: "https://www.tiktok.com/@bjornos"
};

export const contact = {
  email: "bookings@bjornos.com" // Aanpassen naar jouw bookings/contact e-mail
};

export const embeds = {
  /**
   * SOUND_CLOUD_URL:
   * Plaats hier de URL van je laatste mix (track of playlist). Dit is de BEHEER-URL,
   * de embed gebruikt automatisch de juiste player via w.soundcloud.com.
   * Voorbeeld: https://soundcloud.com/user-123456789/bjornos-liveset-vol-01
   */
  soundcloudTrackUrl:
    "https://soundcloud.com/user-123456789/bjornos-energized-vol-01", // <— bewerkbaar

  /**
   * SPOTIFY_EMBED_SRC:
   * Optioneel: Spotify embed voor een track/playlist/artist.
   * Gebruik de 'embed' URL. Voorbeeld playlist:
   * https://open.spotify.com/embed/playlist/37i9dQZF1DX48TTZL62Yht?utm_source=generator&theme=0
   */
  spotifyEmbedSrc:
    "https://open.spotify.com/embed/playlist/37i9dQZF1DX48TTZL62Yht?utm_source=generator&theme=0" // <— bewerkbaar
};

export const analytics = {
  plausibleDomain: "bjornos.example" // Zet dit naar je echte domein of laat leeg om uit te schakelen
};
