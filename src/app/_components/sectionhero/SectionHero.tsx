import Link from "next/link";

import styles from "./sectionhero.module.css";

export default function SectionHero() {
  return (
    <main className={styles["section-hero"]}>
      <div>
        <h1 className={styles["title"]}>Réparez Votre Téléphone Rapidement</h1>
        <h2 className={styles["description"]}>Nous réparons </h2>
        <Link href={"/"}>Commencer votre réparation</Link>
      </div>
    </main>
  );
}
