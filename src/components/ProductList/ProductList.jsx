import ProductCard from "../ProductCard/ProductCard";
import styles from "./product.list.style.module.css";
const ProductList = ({ productList = [], parentRef }) => {
  return (
    <div ref={parentRef} className={styles.product_list}>
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.title}
          price={product.price}
          imageSrc={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
