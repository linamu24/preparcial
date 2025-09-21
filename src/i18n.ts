"use client";
export function useTranslation(locale: Lang = "es") {
  const t = (key: keyof typeof translations["es"]) =>
    translations[locale][key] || key;

  return { t };
}

export const translations = {
  es: {
    home: "Inicio",
    authors: "Autores",
    createAuthor: "Crear Autor",
    title: "Lista de Autores",
    addAuthor: "Agregar Autor",
    CrearAutor: "Crear Autor",
    Nombre: "Nombre",
    FechaNacimiento: "Fecha de Nacimiento",
    Descripcion: "Descripción",
    URLImagen: "URL de la Imagen",
    Crear: "Crear"
  },
  en: {
    home: "Home",
    authors: "Authors",
    createAuthor: "Create Author",
    title: "Authors List",
    addAuthor: "Add Author",
    CrearAutor: "Create Author",
    Nombre: "Name",
    FechaNacimiento: "Birth Date",
    Descripcion: "Description",
    URLImagen: "Image URL",
    Crear: "Create"
  },
};


export type Lang = keyof typeof translations;
