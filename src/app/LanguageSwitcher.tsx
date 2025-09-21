"use client";

export default function LanguageSwitcher({
  langText,
  toggleLang,
}: {
  langText: string;
  toggleLang: () => void;
}) {
  return (
    <button
      onClick={toggleLang}
      className="bg-green-500 text-white px-4 py-2 rounded shadow-md mt-4"
    >
      {langText}
    </button>
  );
}
