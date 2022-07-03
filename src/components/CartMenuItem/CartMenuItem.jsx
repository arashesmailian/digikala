import React from "react";
import styles from "./cart.menu.item.style.module.css";
import { BiTrash, BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseItem,
  removeItem,
} from "../../redux/reducers/cart.reducer";

const CartMenuItem = ({
  // title = "product1",
  // description = "description",
  // count = 1,
  // src = image,
  item,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.CartMenuItem}>
      <div className={styles.CartMenuItem_info}>
        <div className={styles.CartMenuItem_title}>{item.title_fa}</div>
        <div className={styles.CartMenuItem_description}>{item.title_fa}</div>
        <div className={styles.CartMenuItem_control}>
          <div onClick={() => dispatch(removeItem(item))}>
            <BiTrash />
          </div>
          <div onClick={() => dispatch(decreaseItem(item))}>
            <BiMinus />
          </div>
          <div dir="rtl"> {item.count} عدد</div>
          <div onClick={() => dispatch(addToCart(item))}>
            <BiPlus />
          </div>
        </div>
      </div>
      <div className={styles.CartMenuItem_image}>
        <img width={"100%"} src={item.images.main.url[0]} alt="products" />
      </div>
    </div>
  );
};

export default CartMenuItem;
