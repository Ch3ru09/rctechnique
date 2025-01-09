import Image from "next/image";

import LogoImage from "../../assets/logo.png";
import ContactsButton from "./ContactsButton";
import { useTranslations } from "next-intl";

export default function SectionIntro() {
  const t = useTranslations("Homepage.intro");

  return (
    <div className="flex justify-center my-8">
      <div className="grid grid-cols-2 relative w-[80%] gap-8">
        <Image
          src={LogoImage}
          alt=""
          className="left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 absolute z-20 object-contain"
          width={400}
          height={400}
        />
        <div className="bg-green-100 rounded-3xl p-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-8">
            {t("title")}
          </h1>
          <ContactsButton>{t("button")}</ContactsButton>
        </div>
        <Image
          src={"/repairs/battery2.jpg"}
          alt=""
          className="rounded-3xl"
          width={6400}
          height={6400}
        />
      </div>
    </div>
  );
}
