import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  nl: () => import("./fr.json").then((module) => module.default),
};

export default async function getDictionary(locale) {
  return dictionaries[locale]();
}

