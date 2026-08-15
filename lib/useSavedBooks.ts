"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "kdb-saved-books";

// No login required — saved books persist per browser via localStorage only.
export function useSavedBooks() {
  const [saved, setSaved] = useState<string[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setSaved(JSON.parse(raw));
  }, []);

  function toggle(slug: string) {
    setSaved((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  return { saved, toggle, isSaved: (slug: string) => saved.includes(slug) };
}
