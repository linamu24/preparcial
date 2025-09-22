"use client";
import { useAuthors } from "@/context/AuthorsContext";
import { useRouter } from "next/navigation";

export default function AuthorsPage() {
  const { authors, favorites, toggleFavorite, loading, deleteAuthor } = useAuthors();
  const router = useRouter();

  if (loading) return <p>Cargando autores...</p>;

  return (
    <>
      <button
        onClick={() => router.push("/crear")}
        style={{
          background: "green",
          color: "white",
          padding: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
      Crear Autor
      </button>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {authors.map((author) => (
          <div key={author.id} style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}>
            {author.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={author.image}
                alt={author.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }} />
            )}
            <br />
            <strong>Nombre:</strong> {author.name}<br />
            <strong>Fecha de nacimiento:</strong> {author.birthDate} <br />
            <strong>Descripción:</strong> {author.description} <br />
            <br />
            <button
              onClick={() => router.push(`/authors/${author.id}`)}
              style={{
                marginBottom: "15px",
                background: "blue",
                color: "white",
                padding: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Editar
            </button>
            &nbsp;
            <button
              onClick={() => deleteAuthor(author.id!)}
              style={{
                marginBottom: "15px",
                background: "red",
                color: "white",
                padding: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Eliminar
            </button>
            &nbsp;
            <button
            onClick={() => author.id !== undefined && toggleFavorite(author.id)}
            className={`px-5 py-1.5 ${
              author.id !== undefined && favorites.includes(author.id)
                ? "bg-yellow-400 text-white"
                : "bg-gray-200"
            }`}
          >
            {author.id !== undefined && favorites.includes(author.id) ? "Favorito" : "Marcar"}
          </button>
          </div>
        ))}
      </div></>
  );
}

