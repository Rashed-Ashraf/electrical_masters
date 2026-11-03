import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.emswitchgear.com'),
  title: 'Electrical Masters Switchgear Pvt. Ltd. | Industrial Switchgear & Protection Solutions',
  description:
    'Established in 2004, Electrical Masters Switchgear provides cutting-edge low voltage switchgear, PFI panels, MCC, PLC systems, and cable trays in Lahore, Pakistan.',
  keywords: [
    'Electrical Masters Switchgear',
    'Switchgear Pakistan',
    'Low Voltage Switchgear',
    'PFI Panels',
    'Motor Control Centre',
    'PLC System Panels',
    'ATS Panels',
    'Cable Trays Lahore',
    'Nawab Mashkoor Town Kahna Kacha Road',
  ],
  authors: [{ name: 'Electrical Masters Switchgear Pvt. Ltd.' }],
  openGraph: {
    title: 'Electrical Masters Switchgear Pvt. Ltd. | Industrial Switchgear & Protection Solutions',
    description:
      'Established in 2004, Electrical Masters Switchgear provides cutting-edge low voltage switchgear, PFI panels, MCC, PLC systems, and cable trays in Lahore, Pakistan.',
    url: 'https://www.emswitchgear.com',
    siteName: 'Electrical Masters Switchgear',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwl1_Vut92Af4j_fIIv6EsB5tDz0csU3rGQ73CH-5cpwt2Uw533v3rmQEElPREtS83KEWK41PvV6rQxZM14miC6CRL_vuqoBU07jOfYWO6OlSpGhuNFDPcau0DOf5M3gMS9VfMMyFT4lomovJt6KOpb1DKavVHxifCaMcJrY09MlRyVGSeyZ58ZDDH9sXYhTvuTnBaQ6yNWL9_fzb_AvPkvyAUJaYnAGHwqyk7z_Zx3KuEFXM-xsbb',
        width: 1200,
        height: 630,
        alt: 'Electrical Masters Switchgear - Industrial Switchgear & Protection Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electrical Masters Switchgear Pvt. Ltd. | Industrial Switchgear & Protection Solutions',
    description:
      'Established in 2004, Electrical Masters Switchgear provides cutting-edge low voltage switchgear, PFI panels, MCC, PLC systems, and cable trays in Lahore, Pakistan.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwl1_Vut92Af4j_fIIv6EsB5tDz0csU3rGQ73CH-5cpwt2Uw533v3rmQEElPREtS83KEWK41PvV6rQxZM14miC6CRL_vuqoBU07jOfYWO6OlSpGhuNFDPcau0DOf5M3gMS9VfMMyFT4lomovJt6KOpb1DKavVHxifCaMcJrY09MlRyVGSeyZ58ZDDH9sXYhTvuTnBaQ6yNWL9_fzb_AvPkvyAUJaYnAGHwqyk7z_Zx3KuEFXM-xsbb',
    ],
  },
  icons: {
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-khndPMl--eqyjxng4lPYeRoG65w-Dv34EHPDc9kdhuoTfT0HkjHSDhBuFA6GfVdDyTTibWBPIUdZuu5ie4Lf-JymH9aHrpTUyH3DCq2jB-INKakzKWbhQzJryH71C0FtCvGenmaSvbDQhRIei9qgBE9w-GrpRexhf47u_OeYtXdiSgDthCPyHnm5SiXWGaEkK0ZaOcs5a-zMMvZE0rkD9p-SZh3DbRMO2RU9QWqXQ83ox9Z8hvROu_ZsdLmImvaomA',
    shortcut: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-khndPMl--eqyjxng4lPYeRoG65w-Dv34EHPDc9kdhuoTfT0HkjHSDhBuFA6GfVdDyTTibWBPIUdZuu5ie4Lf-JymH9aHrpTUyH3DCq2jB-INKakzKWbhQzJryH71C0FtCvGenmaSvbDQhRIei9qgBE9w-GrpRexhf47u_OeYtXdiSgDthCPyHnm5SiXWGaEkK0ZaOcs5a-zMMvZE0rkD9p-SZh3DbRMO2RU9QWqXQ83ox9Z8hvROu_ZsdLmImvaomA',
    apple: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-khndPMl--eqyjxng4lPYeRoG65w-Dv34EHPDc9kdhuoTfT0HkjHSDhBuFA6GfVdDyTTibWBPIUdZuu5ie4Lf-JymH9aHrpTUyH3DCq2jB-INKakzKWbhQzJryH71C0FtCvGenmaSvbDQhRIei9qgBE9w-GrpRexhf47u_OeYtXdiSgDthCPyHnm5SiXWGaEkK0ZaOcs5a-zMMvZE0rkD9p-SZh3DbRMO2RU9QWqXQ83ox9Z8hvROu_ZsdLmImvaomA',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Electrical Masters Switchgear Private Limited',
  image: 'https://www.emswitchgear.com/logo.png',
  url: 'https://www.emswitchgear.com',
  telephone: '+923004466489',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nawab Mashkoor Town Kahna Kacha Road Kahna Nou',
    addressLocality: 'Lahore',
    addressCountry: 'PK',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          rel="icon"
          href="https://lh3.googleusercontent.com/aida-public/AB6AXuB-khndPMl--eqyjxng4lPYeRoG65w-Dv34EHPDc9kdhuoTfT0HkjHSDhBuFA6GfVdDyTTibWBPIUdZuu5ie4Lf-JymH9aHrpTUyH3DCq2jB-INKakzKWbhQzJryH71C0FtCvGenmaSvbDQhRIei9qgBE9w-GrpRexhf47u_OeYtXdiSgDthCPyHnm5SiXWGaEkK0ZaOcs5a-zMMvZE0rkD9p-SZh3DbRMO2RU9QWqXQ83ox9Z8hvROu_ZsdLmImvaomA"
        />
        <link
          rel="shortcut icon"
          href="https://lh3.googleusercontent.com/aida-public/AB6AXuB-khndPMl--eqyjxng4lPYeRoG65w-Dv34EHPDc9kdhuoTfT0HkjHSDhBuFA6GfVdDyTTibWBPIUdZuu5ie4Lf-JymH9aHrpTUyH3DCq2jB-INKakzKWbhQzJryH71C0FtCvGenmaSvbDQhRIei9qgBE9w-GrpRexhf47u_OeYtXdiSgDthCPyHnm5SiXWGaEkK0ZaOcs5a-zMMvZE0rkD9p-SZh3DbRMO2RU9QWqXQ83ox9Z8hvROu_ZsdLmImvaomA"
        />
        <link
          rel="apple-touch-icon"
          href="https://lh3.googleusercontent.com/aida-public/AB6AXuB-khndPMl--eqyjxng4lPYeRoG65w-Dv34EHPDc9kdhuoTfT0HkjHSDhBuFA6GfVdDyTTibWBPIUdZuu5ie4Lf-JymH9aHrpTUyH3DCq2jB-INKakzKWbhQzJryH71C0FtCvGenmaSvbDQhRIei9qgBE9w-GrpRexhf47u_OeYtXdiSgDthCPyHnm5SiXWGaEkK0ZaOcs5a-zMMvZE0rkD9p-SZh3DbRMO2RU9QWqXQ83ox9Z8hvROu_ZsdLmImvaomA"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className="antialiased selection:bg-[#0098da] selection:text-white bg-[#f2f8fc] text-[#00283d] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
