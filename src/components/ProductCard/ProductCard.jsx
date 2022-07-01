import styles from "./product.card.style.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ name, price, imageSrc, id }) => {
  return (
    <div className={styles.product_card}>
      <Link to={"/products" + id}>
        <img
          width={207}
          height={207}
          className={styles.product_card__image}
          src={imageSrc}
          alt="product"
        />
        <p className={styles.product_card__title}>{name}</p>
        <p className={styles.product_card__price}>${price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
