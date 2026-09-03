import { faqs } from "@/data/faq";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.veranocompany.com.br/#organization",
  name: "Verano Company",
  alternateName: ["Verano Co.", "Verano Co"],
  url: "https://www.veranocompany.com.br",
  logo: "https://www.veranocompany.com.br/logoVerano.png",
  description:
    "Agência especializada em SEO local e posicionamento de empresas no Google Maps.",
  email: "contato@veranocompany.com.br",
  telephone: "+55 19 99574-8782",
  sameAs: ["https://instagram.com/veranocompany"],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.veranocompany.com.br/#website",
  url: "https://www.veranocompany.com.br",
  name: "Verano Company",
  publisher: { "@id": "https://www.veranocompany.com.br/#organization" },
  inLanguage: "pt-BR",
};

const professionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Verano Company",
  provider: { "@id": "https://www.veranocompany.com.br/#organization" },
  areaServed: { "@type": "Country", name: "Brasil" },
  description:
    "Agência especializada em SEO local e posicionamento de empresas no Google Maps.",
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function SiteJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
