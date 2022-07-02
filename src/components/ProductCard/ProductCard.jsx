import styles from "./product.card.style.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  console.log(product);

  return (
    <div className={styles.product_card}>
      <Link to={"/" + product.id}>
        <h2>
          {product.default_variant.price.is_promotion
            ? `${product.default_variant.price.badge.title}`
            : ""}
        </h2>
        <img
          width={207}
          height={207}
          className={styles.product_card__image}
          src={product.images.main.url[0]}
          alt={product.title_fa}
        />
        <p className={styles.product_card__title}>{product.title_fa}</p>
        <div className={styles.product_card__price}>
          {product.default_variant.price.is_promotion && (
            <div className={styles.product_card_discount}>
              <span>
                <s className={styles.product_card__rrpprice}>
                  {product.default_variant.price.rrp_price} تومان
                </s>
              </span>
              <span>{product.default_variant.price.discount_percent}%</span>
            </div>
          )}
          <p className={styles.product_card__selling_price}>
            {product.default_variant.price.selling_price} تومان
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
