import Image from "next/image";
import LogoImg from "../../icon.png";

import styles from "./navbar.module.css";

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
        <li>Pricing</li>
        <li>Faq</li>
        <li>Contact Us</li>
        <li>Start a Repair</li>
        <li>[lang]</li>
      </ul>
    </nav>
  );
}
