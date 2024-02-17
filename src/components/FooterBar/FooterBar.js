import React from "react";
import styles from "./FooterBar.module.css";
import style from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { footbar } from "@/constants/constants";
export default function FooterBar() {
  return (
    <section className={` ${styles.container} ${style.sectionPadding}`}>
      <div className={styles.textcontainer}>
        <h3>تحتاج مساعدة؟</h3>
        <p>فريقنا متواجد لخدمتكم على مدار الساعة 24/7</p>
      </div>
      <ul className={styles.navcont}>
        {footbar.map((nav) => (
          <li key={nav.id} className={styles.navLink}>
            <Image
              className={styles.icon}
              width={55}
              height={55}
              src={nav.image}
              alt={nav.title}
              style={{ marginRight: "10px" }}
            />
            <div className={styles.textz}>
              <h4>{nav.title}</h4>
              <Link
                style={{
                  color: "black",
                  fontSize: "2rem",
                  border: "2 solid BLACK",
                }}
                href={`#${nav.id}`}
              >
                {nav.desc}
              </Link>
            </div>
          </li>
        ))}
      </ul>
      {/* <div className={styles.loc}>
          <h4>تفضل بزيارتنا الآن:</h4>
          <div className={styles.but}>
            <Link href="/">ابحث عن فرع</Link>
          </div>
        </div> */}
    </section>
  );
}
