/**
 * Centrale configuratie voor content en links.
 * Pas deze waarden aan om de website te personaliseren zonder in componenten te zoeken.
 */
export const site = {
  title: "BJORNOS — House DJ",
  description:
    "Ik breng energie en flow naar elke set. Professionele House DJ voor clubs en festivals.",
  domain: "bjornos.nl",
  author: "Bjornos",
  year: 2025
};

export const navLinks: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/music", label: "Music" },
  // { href: "/tour", label: "Tour" },
  { href: "/blog", label: "Blog" },

];

export const socials = {
  // Vul je echte profielen in:
  instagram: "https://www.instagram.com/bjorn.van.wijk/",
  soundcloud: "https://soundcloud.com/bjornos-933013928",
  spotify: "https://open.spotify.com/user/bjornvankrantenwijk?si=07b117bf95e04065", // vervang met echte artist/playlist URL
  tiktok: "https://www.tiktok.com/djbjornos",
  mixcloud: "https://www.mixcloud.com/Bjornos/"
};

export const contact = {
  email: "bjornvanwijk1@gmail.com" // Aanpassen naar jouw bookings/contact e-mail
};

export const embeds = {
  /**
   * SOUND_CLOUD_URL:
   * Plaats hier de URL van je laatste mix (track of playlist). Dit is de BEHEER-URL,
   * de embed gebruikt automatisch de juiste player via w.soundcloud.com.
   * Voorbeeld: https://soundcloud.com/user-123456789/bjornos-liveset-vol-01
   */
  soundcloudTrackUrl:
    "https://soundcloud.com/bjornos-933013928/bjornos-hardhouse-mix-pegassi-lammer-odymel-benwal",

  // starttijd in milliseconden
  soundcloudStartTime: 2030000, // 33:50
  /**
   * SPOTIFY_EMBED_SRC:
   * Optioneel: Spotify embed voor een track/playlist/artist.
   * Gebruik de 'embed' URL. Voorbeeld playlist:
   * https://open.spotify.com/embed/playlist/37i9dQZF1DX48TTZL62Yht?utm_source=generator&theme=0
   */
  spotifyEmbedSrc:
    "https://open.spotify.com/embed/playlist/1poeapOfDehRZlPwyl0T8q?si=dUO7la7zSMuEjXCdDgVmQA&pi=ohHxkpG3Ri2ep?utm_source=generator&theme=0", // <— bewerkbaar

 mixcloudEmbedSrc:
    "https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FBjornos%2Fdrum-bass-mix-dimension-sub-focus-wilkonson-1999%2F"
};
export const analytics = {
  gaMeasurementId: "G-8426GSK95T" // vervang dit door jouw echte GA4 ID
};

