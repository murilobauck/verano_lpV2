import type { MetadataRoute } from "next";

const BASE_URL = "https://www.veranocompany.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
    },
    {
      url: `${BASE_URL}/privacidade`,
      lastModified,
    },
    {
      url: `${BASE_URL}/termos`,
      lastModified,
    },
  ];
}
