"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAuthors, Author } from "@/context/AuthorsContext";

export default function EditAuthorPage() {
  const router = useRouter();
  const { updateAuthor, authors} = useAuthors();
  const params = useParams();

  const [author, setAuthor] = useState<Author | null>(null);

  useEffect(() => {
    const foundAuthor = authors.find((a) => a.id === Number(params.id));
    if (foundAuthor) {
      setAuthor(foundAuthor);
    }
  }, [authors, params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !author.id) return;

    updateAuthor(author.id, author);
    router.push("/authors");
  };

  if (!author) return <p>Cargando datos del autor...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Editar Autor</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "400px",
        }}
      >
        <label>
          <strong>Nombre:</strong>
          <div style={{ border: "1px solid #ccc", padding: "5px" }}>
            <input
              type="text"
              value={author.name}
              aria-label="Nombre del autor"
              aria-invalid={author.name.trim() === "" ? "true" : "false"}
              style={{ width: "100%" }}
              onChange={(e) => setAuthor({ ...author, name: e.target.value })}
              required
            />
          </div>
          {author.name.trim() === "" && (
          <span id="name-error" role="alert" style={{ color: "red" }}>
            El nombre es obligatorio
          </span>)}
        </label>

        <label>
          <strong>Fecha de nacimiento:</strong>
          <div style={{ border: "1px solid #ccc", padding: "5px" }}>
            <input
              type="date"
              value={author.birthDate}
              style={{ width: "100%" }}
              aria-label="Fecha de nacimiento del autor" 
              onChange={(e) => setAuthor({ ...author, birthDate: e.target.value })}
              required
            />
          </div>
          {author.birthDate.trim() === "" && (
          <span id="birthdate-error" role="alert" style={{ color: "red" }}>
            La fecha de nacimiento es obligatoria
          </span>)}
        </label>

        <label>
          <strong>Descripción:</strong>
          <div style={{ border: "1px solid #ccc", padding: "5px" }}>
            <textarea
              value={author.description}
              style={{ width: "100%" , height: "80px"}}
              aria-label="Descripción del autor"
              aria-invalid={author.description.trim() === "" ? "true" : "false"}
              onChange={(e) =>
                setAuthor({ ...author, description: e.target.value })
              }
              required
            />
          </div>
          {author.description.trim() === "" && (
          <span id="description-error" role="alert" style={{ color: "red" }}>
            La descripción es obligatoria
          </span>)}
        </label>

        <label>
          <strong>Imagen URL:</strong>
          <div style={{ border: "1px solid #ccc", padding: "5px" }}>
            <input
              type="text"
              aria-label="URL de la imagen del autor"
              value={author.image}
              style={{ width: "100%" }}
              onChange={(e) => setAuthor({ ...author, image: e.target.value })}
            />
          </div>
        </label>

        <button
          type="submit"
          aria-label="Guardar cambios"
          aria-describedby="Peligro: Estas a punto de modificar los datos del autor"
          style={{
            background: "blue",
            color: "white",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Guardar cambios
        </button>
        
      </form>
    </div>
  );
}