import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kathirgamanathan Kajanan | Senior Software Engineer",
  description:
    "Senior full-stack software engineer specializing in React Native, Next.js, Node.js, Nest.js, real-time systems, event-driven architecture, and scalable cloud applications.",
  keywords: [
    "Senior Software Engineer",
    "Full Stack Engineer",
    "React Native Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Nest.js",
    "Sri Lanka Software Engineer",
    "Kafka",
    "Spark",
    "Elasticsearch",
    "AWS",
    "Docker",
  ],
  authors: [{ name: "Kathirgamanathan Kajanan" }],
  creator: "Kathirgamanathan Kajanan",
  openGraph: {
    title: "Kathirgamanathan Kajanan | Senior Software Engineer",
    description:
      "Senior full-stack engineer building scalable, high-performance digital products — mobile apps, real-time platforms, event-driven systems, and cloud infrastructure.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Kathirgamanathan Kajanan | Senior Software Engineer",
    description:
      "Senior full-stack engineer building scalable, high-performance digital products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
