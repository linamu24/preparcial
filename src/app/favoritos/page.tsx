"use client";
import { useAuthors } from "@/context/AuthorsContext";

export default function FavoritosPage() {
  const { authors, favorites, toggleFavorite } = useAuthors();

  const favAuthors = authors.filter((a) => a.id !== undefined && favorites.includes(a.id));

  if (favAuthors.length === 0) {
    return <p>No tienes autores favoritos todavía</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {favAuthors.map((author) => (
        <div key={author.id} className="border p-4 rounded">
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
            onClick={() => author.id !== undefined && toggleFavorite(author.id)}
            className="px-2 py-1 rounded bg-yellow-400 text-black"
            aria-label="Quitar de favoritos"
            aria-describedby="Peligro: Estas a punto de quitar un autor de tus favoritos"
          >
            Quitar de favoritos
          </button>
        </div>
      ))}
    </div>
  );
}
