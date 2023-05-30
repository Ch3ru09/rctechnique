import type { Metadata } from "next";
import Footer from "./_layoutComponents/Footer";
import Navbar from "./_layoutComponents/Navbar";
import "./globals.css";

export default function RootLayout({ children, params: { lang } }: LayoutProps) {
  const handleChangeTheme = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <html lang="en">
      <body className="">
        <Navbar lang={lang} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "RCtechnique - Phone Repair",
  description: "Service de réparation de téléphone et d'ordinateur qui est fiable, efficace et abordable",
  authors: { name: "RCtechnique" },
  keywords:
    "Phone repair, Mobile repair, Cell phone repair, Smartphone repair, iPhone repair, Samsung repair, Screen repair, Back Cover repair, Battery replacement, Water damage repair, Charging port repair, Software troubleshooting, Data recovery, Camera repair, Speaker repair, Microphone repair, Home button repair, Power button repair, Volume button repair, Headphone jack repair, Back glass replacement, Réparation de téléphone, Réparation mobile, Réparation de cellulaire, Réparation de smartphone, Réparation iPhone, Réparation Samsung, Réparation d'écran, Remplacement de batterie, Réparation des dégâts d'eau, Réparation du port de chargement, Dépannage logiciel, Récupération de données, Réparation de caméra, Réparation d'enceinte, Réparation de microphone, Réparation de bouton d'accueil, Réparation de bouton d'alimentation, Réparation de bouton de volume, Réparation de prise casque, Remplacement de la vitre arrière",
  openGraph: {
    title: "RCtechnique - Phone Repair",
    description: "Service de réparation de téléphone et d'ordinateur qui est fiable, efficace et abordable",
    type: "website",
    url: "https://rctechniques.com",
    siteName: "RCtechnique - Phone Repair",
  },
};

type LayoutProps = {
  children: React.ReactNode;
  params: { lang: string };
};
