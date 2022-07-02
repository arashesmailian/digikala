import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/products.api";
import {
  HomeBanners,
  CategoryItems,
  Container,
  ProductList,
} from "../../components";
import Header from "../../components/Header/Header";
import styles from "./home.style.module.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((d) => {
      setProducts(d.data.products);
      console.log(d.data.products);
    });
  }, []);
  return (
    <div>
      <Header />
      <HomeBanners />
      <section>
        <Container>
          <CategoryItems title="test" products={products} />
          <ProductList productList={products} />
        </Container>
      </section>
    </div>
  );
};

export default Home;
