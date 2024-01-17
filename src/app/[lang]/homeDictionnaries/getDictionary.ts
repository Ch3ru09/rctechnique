import en from "./en.json";
export type Dict = typeof en

const dictionaries: {[x: string]: () => Promise<Dict>} = {
  en: () => import("./en.json").then((module) => module.default),
  fr: () => import("./fr.json").then((module) => module.default),
};

export default function getDictionary(locale: string) {
  return dictionaries[locale]();
}
