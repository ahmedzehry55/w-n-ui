import React from "react";
import styles from "./TheBest.module.css";
import Link from "next/link";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

import { offers } from "@/constants/constants";
import Image from "next/image";
export default function TheBest() {
  const slideLeft = () => {
    let slider = document.getElementById("Bslider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };
  const slideRight = () => {
    let slider = document.getElementById("Bslider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };
  return (
    <>
      <div className={styles.trending}>
        <div className={styles.container}>
          <div className={styles.head}>
            <h2>اكتشف أجمل ما في المملكة العربية السعودية</h2>
            <p>تعّرف على أجمل الأنشطة التي يمكنك القيام بها حول المملكة!</p>
          </div>
          <div className={styles.titleBtns}>
            <h3></h3>
            <div className={styles.btns}>
              <button title="scroll left" onClick={slideLeft}>
                <AiOutlineArrowLeft />
              </button>
              <button title="scroll right" onClick={slideRight}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <div className={styles.rowContainer} id="Bslider">
            {offers.map((item) => (
              <div key={item.id} className={styles.rowItem}>
                <div className={styles.link}>
                  <div className={styles.itemHeader}>
                    <Image
                      fill={true}
                      objectFit="cover"
                      src={item.image}
                      alt={item.title}
                      style={{ borderRadius: ".2cm .2cm 0 0" }}
                    />
                  </div>
                  <div className={styles.itemDescription}>
                    <div>
                      <Link href="/" style={{ marginLeft: "10px" }}>
                        <IoIosArrowBack />
                      </Link>
                    </div>
                    <div className={styles.descText}>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
