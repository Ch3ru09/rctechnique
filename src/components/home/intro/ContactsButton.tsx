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
      className="inline-block bg-blue-500 hover:bg-blue-600 focus:bg-blue-800 text-gray-100 font-bold py-4 px-8 rounded-lg transition-colors duration-300"
    >
      {children}
    </button>
  );
}
