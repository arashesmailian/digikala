import styles from "./product.card.style.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ name, price, imageSrc, id, isPromotion = true }) => {
  return (
    <div className={styles.product_card}>
      <Link to={"/" + id}>
        <h2>{isPromotion ? "فروش ویژه" : ""}</h2>
        <img
          width={207}
          height={207}
          className={styles.product_card__image}
          src={imageSrc}
          alt={name}
        />
        <p className={styles.product_card__title}>{name}</p>
        <p className={styles.product_card__price}>${price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
