import Image from "next/image";

import ContactsButton from "./ContactsButton";
import { useTranslations } from "next-intl";

export default function SectionIntro() {
  const t = useTranslations("Homepage.intro");

  return (
    <div className="flex relative gap-8 align-middle my-8 w-[80%] h-[80vh] mx-auto">
      <Image
        src={"/logo.png"}
        alt=""
        className="left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 absolute z-20 object-contain w-[30%]"
        width={6400}
        height={6400}
      />
      <div className="bg-green-100 rounded-3xl p-10 flex flex-col justify-between grow shrink basis-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-8">
          {t("title")}
        </h1>
        <ContactsButton>{t("button")}</ContactsButton>
      </div>
      <div className="relative shrink grow basis-0">
          <Image
            src={"/repairs/battery2.jpg"}
            alt=""
            className="object-cover rounded-3xl relative w-full h-full"
            fill
          />
      </div>
    </div>
  );
}
