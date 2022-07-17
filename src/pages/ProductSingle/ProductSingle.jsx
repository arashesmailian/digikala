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
import { CategoryItems } from "../../components";

const ProductSingle = ({ data }) => {
  console.log(data.product);

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
            <img
              src={data.product.images.main.url[0]}
              alt={data.product.title_fa}
            />
          </div>
        </div>
        <div className={styles.product_description}>
          <h2>{data.product.title_fa}</h2>
          <p>{data.product.category.content_description}</p>
          <div className={styles.product_colors_container}>
            رنگ
            {data.product.colors.map((color) => (
              <div
                style={{ background: color.hex_code }}
                className={styles.product_colors}
              ></div>
            ))}
          </div>
        </div>
        <div className={styles.product_seller}>
          <div>
            عملکرد فروشگاه {data.product.default_variant.seller.stars}/5
          </div>
          <div dir="rtl">
            {data.product.default_variant.digiclub.point} امتیاز دیجی کلاب
          </div>
          <div>
            {data.product.default_variant.price.selling_price} قیمت فروشنده
          </div>
          {/* <div> */}
          <button
            onClick={() => dispatch(addToCart(data.product))}
            className={styles.product_add_to_cart}
          >
            افزودن به سبد
          </button>
          {/* </div> */}
        </div>
      </section>
      <section
        style={{
          marginTop: 32,
        }}
      >
        <CategoryItems
          title={"محصولات مشابه"}
          products={data.recommendations.related_products.products}
        />
      </section>
      <section
        style={{
          marginTop: 32,
        }}
      ></section>
    </div>
  );
};

export default withSpinner(ProductSingle, getProduct);
