"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthors } from "@/context/AuthorsContext";

export default function CrearAutorPage() {
  const router = useRouter();
  const { createAuthor } = useAuthors();

  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    createAuthor({ name, birthDate, description, image });
    router.push("/authors");
  };

  return (
    <div style={{ padding: "10px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Crear Autor</h1>
      <form onSubmit={handleSubmit} style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxWidth: "400px",
          }}>
        <label>
          <strong>Nombre:</strong>
          <div style={{ border: "1px solid #ccc", padding: "5px" }}>
          <input
            type="text"
            value={name}
            style={{ width: "100%" }}
            aria-label="Coloca tu Nombre"
            aria-invalid={name.trim() === "" ? "true" : "false"}
            onChange={(e) => setName(e.target.value)}
            required />
          </div>
          {name.trim() === "" && (
            <span id="name-error" role="alert" style={{ color: "red" }}>
              El nombre es obligatorio
            </span>
          )}
        </label>
        <label>
          <strong>Fecha de Nacimiento:</strong>
          <div style={{ border: "1px solid #ccc", padding: "5px" }}>
            <input
              type="date"
              value={birthDate}
              style={{ width: "100%" }}
              aria-label="Coloca tu Fecha de Nacimiento"
              onChange={(e) => setBirthDate(e.target.value)}
              required />
          </div>
          {birthDate.trim() === "" && (
            <span id="birthdate-error" role="alert" style={{ color: "red" }}>
              La fecha de nacimiento es obligatoria
            </span>
          )}
        </label>
        <label>
          <strong>Descripción:</strong>
          <div style={{ border: "1px solid #ccc", padding: "5px" }}>
            <textarea
              value={description}
              style={{ width: "100%", height: "80px" }}
              aria-label="Coloca una Descripción"
              aria-invalid={description.trim() === "" ? "true" : "false"}
              onChange={(e) => setDescription(e.target.value)}
              required />
          </div>
          {description.trim() === "" && (
            <span id="description-error" role="alert" style={{ color: "red" }}>
              La descripción es obligatoria
            </span>
          )}
        </label>
        <label>
          <strong>URL Imagen:</strong>
          <div style={{ border: "1px solid #ccc", padding: "5px" }}>
            <input
              type="text"
              value={image}
              style={{ width: "100%" }}
              aria-label="Coloca la URL de una Imagen"
              onChange={(e) => setImage(e.target.value)} />
          </div>
        </label>
        <br />
        <button
          type="submit"
          aria-label="Crear autor"
          aria-describedby="Estas a punto de crear un nuevo autor "
          style={{
            background: "green",
            color: "white",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Crear</button>
      </form>
    </div>
  );
}