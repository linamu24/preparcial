import "./globals.css";
import Link from "next/link";
import { AuthorsProvider } from "@/context/AuthorsContext";

export const metadata = {
  title: "CRUD Autores",
  description: "App de CRUD con Next.js y Spring Boot",
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="es">
      <body>
        <AuthorsProvider>
          <nav
            style={{
              background: "#6c4075ff",
              padding: "10px",
              display: "flex",
              gap: "30px"
            }}
          >
            <Link href="/" style={{ color: "white" }}>
              <strong>Home</strong>
            </Link>
            <Link href="/authors" style={{ color: "white" }}>
              <strong>Autores</strong>
            </Link>
            <Link href="/crear" style={{ color: "white" }}>
              <strong>Crear Autor</strong>
            </Link>
          </nav>

          <main style={{ padding: "20px" }}>{children}</main>
        </AuthorsProvider>
      </body>
    </html>
  );
}
