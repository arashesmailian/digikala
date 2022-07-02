import React from "react";
import styles from "./cart.menu.item.style.module.css";
import image from "../../assets/images/prodcut1.jpg";
import { BiTrash } from "react-icons/bi";

const CartMenuItem = ({
  title = "product1",
  description = "description",
  count = 1,
  src = image,
}) => {
  return (
    <div className={styles.CartMenuItem}>
      <div className={styles.CartMenuItem_info}>
        <div className={styles.CartMenuItem_title}>{title}</div>
        <div className={styles.CartMenuItem_description}>{description}</div>
        <div className={styles.CartMenuItem_control}>
          <div>
            <BiTrash />
          </div>
          <div dir="rtl"> {count} عدد</div>
        </div>
      </div>
      <div className={styles.CartMenuItem_image}>
        <img width={"100%"} src={src} alt="products" />
      </div>
    </div>
  );
};

export default CartMenuItem;
