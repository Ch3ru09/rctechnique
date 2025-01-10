"use client";

import { useEffect, useState } from "react";

export default function ContactsButton({ children }: { children: string }) {
  let [contacts, setContacts] = useState<Element | null>(null);

  useEffect(() => {
    setContacts(document.getElementById("contactTitle"));
  }, []);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        contacts?.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="inline-block border-4 border-gray-900 text-gray-900 font-bold py-4 px-8 mt-15 rounded-full transition-colors duration-300 w-1/3">
      {children}
    </button>
  );
}
