"use client";

import { createContext, useContext, useState } from "react";
import { translations, Lang } from "../i18n";

interface LanguageContextProps {
  lang: Lang;
  t: typeof translations["es"];
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  const value = {
    lang,
    t: translations[lang],
    setLang,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  return context;
}
