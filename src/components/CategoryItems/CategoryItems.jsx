import { useRef } from "react";
import { ProductList } from "..";
import styles from "./category.items.style.module.css";

const CategoryItems = ({ title, products = [] }) => {
  const parent = useRef(null);
  const scroll = (scrollOffset) => {
    let i = 0;
    let scrollLeft = parent.current.scrollLeft;
    let scrollSign = scrollOffset / Math.abs(scrollOffset);
    let cancel = setInterval(() => {
      i++;
      if (i < Math.abs(scrollOffset)) {
        // console.log(Math.abs(scrollOffset));

        parent.current.scrollLeft = scrollLeft + i * scrollSign;
        // scrollOffset / Math.abs(scrollOffset);
        console.log(parent.current.scrollLeft);
      } else {
        clearInterval(cancel);
      }
    }, 1);
  };

  return (
    <div className={styles.category_items}>
      <h2 className={styles.category_title}>{title}</h2>
      <div
        onClick={() => {
          scroll(-100);
          console.log("next");
        }}
        className={styles.product_list_navigation_next}
      />
      <ProductList parentRef={parent} productList={products} />
      <div
        onClick={() => {
          scroll(100);
          console.log("back");
        }}
        className={styles.product_list_navigation_back}
      />
    </div>
  );
};

export default CategoryItems;
