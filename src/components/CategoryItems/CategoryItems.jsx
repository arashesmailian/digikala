// import { useRef } from "react";
import { ProductList } from "..";
import styles from "./category.items.style.module.css";

const CategoryItems = ({ title, products = [] }) => {
  // const parent = useRef(null);
  // const scroll = (scrollOffset) => {
  //   let i = 0;
  //   let cancel = setInterval(() => {
  //     i++;
  //     if (i < Math.abs(scrollOffset)) {
  //       console.log(parent.current);
  //       parent.current.scrollLeft -=
  //         (-1 * scrollOffset) / Math.abs(scrollOffset);
  //     } else {
  //       clearInterval(cancel);
  //     }
  //   }, 1);
  // };
  return (
    <div className={styles.category_items}>
      <h2 className={styles.category_title}>{title}</h2>
      <div
        // onClick={() => scroll(-100)}
        className={styles.product_list_navigation_next}
      />
      <ProductList productList={products} />
      <div
        // onClick={() => scroll(100)}
        className={styles.product_list_navigation_back}
      />
    </div>
  );
};

export default CategoryItems;
