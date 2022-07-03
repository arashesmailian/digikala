import ProductCard from "../ProductCard/ProductCard";
import styles from "./product.list.style.module.css";

const ProductList = ({ productList = [] }) => {
  console.log(productList);

  return (
    <div className={styles.product_list}>
      {productList.map((product) => (
        // <ProductCard
        //   key={product.id}
        //   id={product.id}
        //   name={product.title_fa}
        //   price={product.default_variant.price.selling_price}
        //   imageSrc={product.images.main.url[0]}
        //   isPromotion={product.default_variant.price.is_promotion}
        // />
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
