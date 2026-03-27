import type { Metadata } from "next";
import { Instrument_Serif, Epilogue } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const epilogue = Epilogue({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Randora — We Build Digital Products That Scale",
    template: "%s | Randora",
  },
  description:
    "A multi-disciplinary team of engineers and designers building secure, AI-powered digital products for startups and enterprises across Africa and beyond.",
  keywords: [
    "software agency Nigeria",
    "product development Lagos",
    "Next.js agency",
    "AI integration",
    "NestJS",
    "React Native",
    "CAC registered tech company",
  ],
  authors: [{ name: "Randora Ltd" }],
  creator: "Randora Ltd",
  metadataBase: new URL("https://randora.co"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://randora.co",
    siteName: "Randora",
    title: "Randora — We Build Digital Products That Scale",
    description:
      "A multi-disciplinary team of engineers and designers building secure, AI-powered digital products for startups and enterprises across Africa.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Randora — Digital Product Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@randora_hq",
    creator: "@randora_hq",
    title: "Randora — We Build Digital Products That Scale",
    description:
      "A multi-disciplinary team of engineers and designers building secure, AI-powered digital products for startups and enterprises across Africa.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${epilogue.variable}`}
    >
      <body className={epilogue.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
