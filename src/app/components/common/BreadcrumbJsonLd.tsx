interface BreadcrumbJsonLdProps {
  path: string;
  label: string;
}

export function BreadcrumbJsonLd({ path, label }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.veranocompany.com.br/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: `https://www.veranocompany.com.br${path}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
