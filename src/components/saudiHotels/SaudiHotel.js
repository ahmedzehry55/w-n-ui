import React from "react";
import styles from "../hotels/WorldHotel.module.css";
import Link from "next/link";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { worldHotel } from "@/constants/constants";
import Image from "next/image";
export default function SaudiHotel() {
  const slideLeft = () => {
    let slider = document.getElementById("SHslider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };
  const slideRight = () => {
    let slider = document.getElementById("SHslider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };
  return (
    <>
      <div className={styles.trending}>
        <div className={styles.container}>
          <div className={styles.btns}>
            <button
              className={styles.slideLeft}
              title="scroll left"
              onClick={slideLeft}
            >
              <IoIosArrowBack />
            </button>
            <button
              className={styles.slideRight}
              title="scroll right"
              onClick={slideRight}
            >
              <IoIosArrowForward />
            </button>
          </div>
          <div className={styles.head}>
            <h2>أفضل الفنادق السعودية</h2>
            
          </div>
          <div className={styles.titleBtns}>
            <h3></h3>
          </div>
          <div className={styles.rowContainer} id="SHslider">
            {worldHotel.map((item) => (
              <div key={item.id} className={styles.rowItem}>
                <Image
                  fill={true}
                  objectFit="cover"
                  src={item.image}
                  alt={item.title}
                  style={{ borderRadius: ".2cm " }}
                />
                <div className={styles.link}>
                  <div className={styles.itemDescription}>
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
