"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <p className="text-sm text-white/90 border border-white/25 rounded-sm px-5 py-3">
        Thanks — you're on the list. Check your inbox soon.
      </p>
    );
  }

  return (
    <form
      className="flex w-full md:w-auto items-center border border-white/25 rounded-sm overflow-hidden"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="flex-1 md:w-72 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/55 focus:outline-none"
        aria-label="Email address"
      />
      <button
        type="submit"
        className="bg-ink text-cream text-sm font-medium px-5 py-2.5 hover:bg-black transition"
      >
        Subscribe
      </button>
    </form>
  );
}
