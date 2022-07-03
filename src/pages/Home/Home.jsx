import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/products.api";
import { HomeBanners, Container, ProductList } from "../../components";
import Header from "../../components/Header/Header";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((d) => {
      setProducts(d.data.products);
    });
  }, []);
  return (
    <div>
      <Header />
      <HomeBanners />
      <section>
        <Container>
          <ProductList productList={products} />
        </Container>
      </section>
    </div>
  );
};

export default Home;
