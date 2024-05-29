import Image from "next/image";
import LogoImg from "../../icon.png";

import styles from "./navbar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles["nav"]}>
      <div className={styles["left"]}>
        <Image src={LogoImg} alt="RCTechnique Logo" />
        <div className={styles["company-name"]}>
          <span>RC</span> Technique
        </div>
      </div>
      <ul className={styles["right"]}>
        <li>
          <Link href={"/"}>Prix</Link>
        </li>
        <li>
          <Link href={"/"}>Faq</Link>
        </li>
        <li>
          <Link href={"/"}>Nous Contacter</Link>
        </li>
        <li>
          <Link href={"/"}>Commencer à réparer</Link>
        </li>
        <li>[lang]</li>
      </ul>
    </nav>
  );
}
