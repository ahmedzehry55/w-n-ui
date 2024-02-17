import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import styles from './BtnArrow.module.css'
const BtnArrow = (props) => {
   const en = useSelector((state) => state.langs.value);
   return (
      <Link
         href={props.href}
         className={styles.fLink}
      >
         <div className={styles.fdiv}>
            {props.title}
            {/* <i className="fal fa-arrow-left text-primary group-hover:text-white"></i> */}
            <FontAwesomeIcon icon={en ? faArrowRight : faArrowLeft} className={styles.ficon} />
         </div>
         <span className={styles.fspan}></span>
      </Link>
   );
};

export default BtnArrow;
