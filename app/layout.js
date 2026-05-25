import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
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

export const metadata = {
  title: "Murilo Alves | Full Stack Developer & Tech Craftsman",
  description: "Portfólio pessoal de Murilo Alves. Desenvolvimento de sistemas web, automações inteligentes, landing pages de alta conversão, integrações e IAs.",
  keywords: ["Murilo Alves", "Full Stack Developer", "Laravel", "React", "Docker", "n8n", "Inteligência Artificial", "Automação", "Desenvolvedor PHP"],
  authors: [{ name: "Murilo Alves" }],
  creator: "Murilo Alves",
  openGraph: {
    title: "Murilo Alves | Full Stack Developer",
    description: "Desenvolvo sistemas, automações e experiências digitais premium.",
    type: "website",
    locale: "pt_BR",
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
