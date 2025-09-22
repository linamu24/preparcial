"use client";
import { createContext, useContext, useEffect, useState } from "react";

export interface Author {
  id?: number;
  name: string;
  birthDate: string;
  description: string;
  image: string;
}

interface AuthorsContextType {
  authors: Author[];
  loading: boolean;
  favorites: number[];
  toggleFavorite: (id: number) => void;
  createAuthor: (author: Author) => void;
  updateAuthor: (id: number, author: Author) => void;
  deleteAuthor: (id: number) => void;
}

const AuthorsContext = createContext<AuthorsContextType | undefined>(undefined);

const API_URL = "http://127.0.0.1:8080/api/authors";

export function AuthorsProvider({ children }: { children: React.ReactNode }) {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setAuthors(data);
      } catch (err) {
        console.error("Error fetching authors:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAuthors();
  }, []);

  const createAuthor = (author: Author) => {
    const newAuthor = { ...author, id: Date.now() }; // id temporal asegura que es unico
    setAuthors((prev) => [...prev, newAuthor]);
  };

  const updateAuthor = (id: number, author: Author) => {
    setAuthors((prev) =>
      prev.map((a) => (a.id === id ? { ...a, ...author } : a))
    );
  };

  const deleteAuthor = (id: number) => {
    setAuthors((prev) => prev.filter((a) => a.id !== id));
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };
  return (
    <AuthorsContext.Provider
      value={{ authors, loading, favorites, toggleFavorite, createAuthor, updateAuthor, deleteAuthor }}
    >
      {children}
    </AuthorsContext.Provider>
  );
}


export function useAuthors() {
  const ctx = useContext(AuthorsContext);
  if (!ctx) throw new Error("useAuthors must be used dentro de AuthorsProvider");
  return ctx;
}

