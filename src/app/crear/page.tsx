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
              style={{ width: "100%"}}
              onChange={(e) => setName(e.target.value)}
              required />
          </div>
        </label>
        <label>
          <strong>Fecha de Nacimiento:</strong>
          <div style={{ border: "1px solid #ccc", padding: "5px" }}>
            <input
              type="date"
              value={birthDate}
              style={{ width: "100%" }}
              onChange={(e) => setBirthDate(e.target.value)}
              required />
          </div>
        </label>
        <label>
          <strong>Descripción:</strong>
          <div style={{ border: "1px solid #ccc", padding: "5px" }}>
            <textarea
              value={description}
              style={{ width: "100%", height: "80px" }}
              onChange={(e) => setDescription(e.target.value)}
              required />
          </div>
        </label>
        <label>
          <strong>URL Imagen:</strong>
          <div style={{ border: "1px solid #ccc", padding: "5px" }}>
            <input
              type="text"
              value={image}
              style={{ width: "100%" }}
              onChange={(e) => setImage(e.target.value)} />
          </div>
        </label>
        <br />
        <button
          type="submit"
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