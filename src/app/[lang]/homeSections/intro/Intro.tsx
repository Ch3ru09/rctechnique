import Image from "next/image";

import LogoImage from "../../assets/logo.png";
import ContactsButton from "./ContactsButton";
import { useTranslations } from "next-intl";

export default function SectionIntro() {
  const t = useTranslations("Homepage.intro")

  return (
    <div>
      <div className="grid relative">
        <Image
          src={LogoImage}
          alt=""
          className="h-full sm:h-auto -bottom-[40%] 2xs:-bottom-[35%] xs:bottom-0 lg:-bottom-[40%] absolute opacity-75 md:right-20 z-20 object-contain"
          width={400}
          height={400}
        />
        <div className="bg-green-100 relative w-[60%] justify-self-center p-20 z-10 rounded-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-8">
            <span className="text-red-500">RC Technique</span> : <br/>
            {t("title")}
          </h1>
          <ContactsButton>{t("button")}</ContactsButton>
        </div>
      </div>
     
      <Image
        src={"/repairs/battery.jpg"}
        alt=""
        className="w-[60%] h-80 object-cover justify-self-center z-10 rounded-3xl mt-5"
        width={2000}
        height={2000}
      />
  
    </div>
    
  );
}

