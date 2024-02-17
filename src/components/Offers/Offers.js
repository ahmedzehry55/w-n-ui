import React from "react";
import styles from "./Offers.module.css";
import Link from "next/link";
import { offers } from "@/constants/constants";
import Image from "next/image";
 

function Offers() {

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2>عروض مميزة منّا لك</h2>
        <Link href="#">عرض المزيد</Link>
      </div>
      <div className={styles.offerCardContainer}>
        
        {offers.map((offer, index) => (
          <div className={styles.offerCard}>
            <div className={styles.offerCardImg}>
              <Image objectFit="contain" fill={true} src={offer.image} />
            </div>
            <div className={styles.offerCardtext}>
              <h3 className={styles.offerCardTextTitle}>
                عرض استثنائي! قيمة حجزك كنقاط بمحفظتك
              </h3>
              <p className={styles.offerCardTextP}>
                لغاية 99.99% كنقاط على إقامتك الشتوية في المم...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
