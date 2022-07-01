import React from "react";
import styles from "./banners.style.module.css";
import bigPic from "../../assets/images/banner1.gif";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";

const HomeBanners = () => {
  return (
    <section className={styles.banners}>
      <div className={styles.img__cointainer}>
        <img src={bigPic} alt="banner" width={"883px"} />
      </div>
      <div className={styles.right_side_banners}>
        <div className={styles.img__cointainer}>
          <img src={banner2} alt="banner" width={"100%"} />
        </div>
        <div className={styles.img__cointainer}>
          <img src={banner3} alt="banner" width={"100%"} />
        </div>
      </div>
    </section>
  );
};

export default HomeBanners;
