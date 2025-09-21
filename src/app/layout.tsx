"use client";
import "./globals.css";
import Link from "next/link";
import { AuthorsProvider } from "@/context/AuthorsContext";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";

function Navbar() {
  const { t, setLang, lang } = useLanguage();

  return (
    <nav
      style={{
        background: "#6c4075ff",
        padding: "10px",
        display: "flex",
        gap: "30px",
        alignItems: "center"
      }}
    >
      <Link href="/" style={{ color: "white" }}>
        <strong>{t.home}</strong>
      </Link>
      <Link href="/authors" style={{ color: "white" }}>
        <strong>{t.authors}</strong>
      </Link>
      <Link href="/crear" style={{ color: "white" }}>
        <strong>{t.createAuthor}</strong>
      </Link>

      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as any)}
        style={{ marginLeft: "auto", padding: "5px", color: "white", fontWeight: "bold" }}
      >
        <option value="es" style={{ fontWeight: lang === "es" ? "bold" : "normal" }}>Español</option>
        <option value="en" style={{ fontWeight: lang === "en" ? "bold" : "normal" }}>English</option>
      </select>
    </nav>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <AuthorsProvider>
            <Navbar />
            <main style={{ padding: "20px" }}>{children}</main>
          </AuthorsProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
