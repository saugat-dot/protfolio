import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Saugat Rauniyar – Full Stack Developer & AI Enthusiast",
    template: "%s | Saugat Rauniyar",
  },
  description:
    "CSE Student at SIT Tumakuru building practical software and intelligent digital solutions. Full Stack Developer passionate about AI and modern web technologies.",
  keywords: [
    "Saugat Rauniyar",
    "Full Stack Developer",
    "AI Enthusiast",
    "CSE Student",
    "Next.js",
    "React",
    "TypeScript",
    "SIT Tumakuru",
  ],
  authors: [{ name: "Saugat Rauniyar" }],
  creator: "Saugat Rauniyar",
  metadataBase: new URL("https://saugatrauniyar.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saugatrauniyar.vercel.app",
    title: "Saugat Rauniyar – Full Stack Developer & AI Enthusiast",
    description:
      "CSE Student building practical software and intelligent digital solutions.",
    siteName: "Saugat Rauniyar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saugat Rauniyar – Full Stack Developer & AI Enthusiast",
    description:
      "CSE Student building practical software and intelligent digital solutions.",
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

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
