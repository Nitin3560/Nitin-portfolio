import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nitin Singh Rathore — Software Engineer",
  description:
    "Selected engineering work, case studies, and writing. Calm, credible, recruiter-first portfolio.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Nitin Singh Rathore — Software Engineer",
    description:
      "Selected engineering work, case studies, and writing. Calm, credible, recruiter-first portfolio.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-zinc-950 antialiased`}>
        {children}
      </body>
    </html>
  );
}

