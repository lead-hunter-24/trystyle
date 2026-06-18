import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--ff-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--ff-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--ff-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trystyle.shop"),
  title: "TryStyle — The AI Operating System for Fashion Commerce",
  description:
    "TryStyle is an AI-native FashionTech platform delivering Generative AI Virtual Try-On, AI-Powered Cataloging, Personalized Recommendations, and Computer Vision-driven Fashion Intelligence at scale.",
  alternates: { canonical: "/" },
  keywords: [
    "Generative AI",
    "Virtual Try-On",
    "Computer Vision",
    "Vision Language Models",
    "Fashion AI",
    "AI Cataloging",
    "Recommendation Engine",
    "Visual Search",
    "Multimodal AI",
    "Personalization Engine",
    "Fashion Intelligence",
    "GPU Accelerated AI",
    "Cloud Native AI",
    "Retail AI",
    "E-commerce AI",
  ],
  authors: [{ name: "TryStyle" }],
  openGraph: {
    title: "TryStyle — The AI Operating System for Fashion Commerce",
    description:
      "Generative AI Virtual Try-On, AI-Powered Cataloging, Personalized Recommendations, and Computer Vision-driven Fashion Intelligence.",
    type: "website",
    url: "https://trystyle.shop",
    siteName: "TryStyle",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
