import Link from "next/link";

import styles from "./sectionhero.module.css";

export default function SectionHero() {
  return (
    <section className={styles["section-hero"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>Réparez Votre Téléphone Rapidement</h1>
        <h2 className={styles["description"]}>Nous réparons </h2>
        <Link href={"/"} className={"button hover-effect"}>
          Commencer votre réparation
        </Link>
      </div>
    </section>
  );
}
