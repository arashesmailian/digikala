import React, { useEffect, useRef, useState } from "react";
import { getProducts } from "../../api/products.api";
import {
  HomeBanners,
  Container,
  ProductList,
  ProductCard,
} from "../../components";
import Header from "../../components/Header/Header";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./home.style.module.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const parent = useRef(null);
  const handleNext = () => {
    getProducts(page + 1).then((newData) => {
      setPage(page + 1);
      setProducts([...products, newData.data.products]);
    });
  };
  useEffect(() => {
    getProducts(1).then((d) => {
      setProducts(d.data.products);
    });
  }, []);
  // getProducts(1).then((d)=>{
  //   setProducts(d.data.products)
  // })
  return (
    <div>
      <Header />
      <HomeBanners />
      <section className={styles.home_products}>
        <Container>
          <ProductList productList={products} />
        </Container>
        {/* <button
          className={styles.home_next_page}
          onClick={() => setPage(page + 1)}
        >
          next
        </button>
        <button
          className={styles.home_next_page}
          onClick={() => setPage(page - 1)}
        >
          previous
        </button> */}
      </section>
      <Container>
        <InfiniteScroll
          dataLength={products.length}
          next={handleNext}
          hasMore={true}
          loader={<h4>loading...</h4>}
          ref={parent}
        >
          {/* <ProductList productList={products} parentRef={parent} /> */}
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </InfiniteScroll>
      </Container>
    </div>
  );
};

export default Home;
