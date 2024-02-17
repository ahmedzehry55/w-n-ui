import styles from "./index.module.css";
import styles from './card.module.css'
import BtnArrow from "./BtnArrow";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";

const TripesCard = ({ item, en }) => {
  return (
    <div className={styles.container}>
      <div className={`flip-card-inner ${styles.flipcardInner}`}>
        <div className={`flip-card-front  ${styles.flipCardFront}`}>
          <Image
            src={item.image}
            alt={en ? item.name_en : item.name}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.flipCardFrontDivinner}>
            <h3 className="title md:text-xl lg:text-2xl text-white font-bold mb-4">
              {en ? item.name_en : item.name}
            </h3>
            <span className="text-primary min-w-[3rem] w-12 h-12 border-2 border-primary rounded-full flex justify-center items-center">
              {/* <i className="fas fa-arrow-left rotate-45"></i> */}
              <FontAwesomeIcon icon={faArrowLeft} className="rotate-45" />
            </span>
          </div>
        </div>
        <div
          className={`flip-card-back  ${styles.card__back}`}
        >
          <Image
            src={"/images/logo.webp"}
            alt={`tripes logo ${item.name}`}
            width={102}
            height={70}
            className={` object-cover ${styles.back__logo}`}
          />
          <h3 className={styles.back__title}>{item.name}</h3>
          <div className={styles.card__btn}>
            <BtnArrow
              title="تفاصيل البرنامج"
              href={`/${
                item.country_for === "discounts" ? "sales" : "our-programs"
              }/${item.id}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripesCard;
