import { BiHeart } from "react-icons/bi";
import { BiShareAlt } from "react-icons/bi";
import { BiBellPlus } from "react-icons/bi";
// import { Link } from "react-router-dom";
import styles from "./product.single.style.module.css";
import withSpinner from "../../components/withSpinner/withSpinner";
// import productImage from "../../assets/images/prodcut1.jpg";
import { useDispatch } from "react-redux";
import { getProduct } from "../../api/products.api";
import { addToCart } from "../../redux/reducers/cart.reducer";
import Header from "../../components/Header/Header";

const ProductSingle = ({ product }) => {
  // console.log(product);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: 32,
      }}
    >
      <Header />
      <section
        className={styles.product_details}
        style={{
          marginTop: 32,
        }}
      >
        <div className={styles.product_left_side}>
          <div className={styles.product_tools}>
            <div>
              <BiHeart size={"32px"} />
            </div>
            <div>
              <BiShareAlt size={"32px"} />
            </div>
            <div>
              <BiBellPlus size={"32px"} />
            </div>
          </div>
          <div className={styles.product_image}>
            <img src={product.images.main.url[0]} alt={product.title_fa} />
          </div>
        </div>
        <div className={styles.product_description}>
          <h2>{product.title_fa}</h2>
          <p>{product.category.content_description}</p>
        </div>
        <div className={styles.product_seller}>
          <div>{product.default_variant.price.selling_price}</div>
          <div>
            <button
              onClick={() => dispatch(addToCart(product))}
              className={styles.product_add_to_cart}
            >
              add to cart
            </button>
          </div>
        </div>
      </section>
      <section
        style={{
          marginTop: 32,
        }}
      >
        {/* <CategoryItems title={"related products"} products={products} />
      </section>
      <section
        style={{
          marginTop: 32,
        }}
      > */}
        <div>comments</div>
      </section>
    </div>
  );
};

export default withSpinner(ProductSingle, getProduct);
