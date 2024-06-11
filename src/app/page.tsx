import NavBar from "./_components/navbar/NavBar";
import SectionHero from "./_components/sectionhero/SectionHero";
import SectionServices from "./_components/sectionservices/SectionServices";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles["intro"]}>
        <NavBar />
        <SectionHero />
      </div>
      <SectionServices />
    </>
  );
}

