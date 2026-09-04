import type { Metadata } from "next";

// Next.js's Metadata API does not deep-merge nested objects like `openGraph`
// between a layout and a page — a page that sets its own `openGraph` replaces
// the layout's entire object. Spread this into every page-level `openGraph`
// override so type/siteName/locale/images aren't silently dropped (which is
// exactly what happened: og:image was missing from every route because each
// page only set title/description/url).
export const sharedOpenGraph: NonNullable<Metadata["openGraph"]> = {
  type: "website",
  siteName: "Verano Company",
  locale: "pt_BR",
  images: [{ url: "/og.png", width: 1200, height: 630 }],
};
