import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-editorial",
  weight: ["700", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-text",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || profile.siteUrl;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: "Portfólio pessoal de Murilo Alves, desenvolvedor focado em sistemas web, automações, integrações e experiências digitais.",
  keywords: [
    "Murilo Alves",
    "Desenvolvedor Full Stack",
    "React",
    "Next.js",
    "Laravel",
    "PHP",
    "Automação",
    "Inteligência Artificial",
    "Portfólio",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: "Sistemas web, automações e experiências digitais com foco em clareza, performance e valor real.",
    url: "/",
    siteName: `${profile.name} Portfólio`,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${profile.name} - ${profile.role}`,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description: "Portfólio pessoal de desenvolvimento web, automações e soluções digitais.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
      style={{
        "--font-editorial": outfit.style.fontFamily,
        "--font-text": plusJakartaSans.style.fontFamily,
        "--font-mono": jetbrainsMono.style.fontFamily,
      }}
    >
      <body>{children}</body>
    </html>
  );
}
