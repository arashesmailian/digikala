import React, { useCallback, useEffect, useState } from "react";
import { getProducts } from "../../api/products.api";
import { HomeBanners, Container, ProductCard } from "../../components";
import Header from "../../components/Header/Header";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./home.style.module.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);

  const handleNext = useCallback(() => {
    getProducts(page + 1)
      .then((newData) => {
        let data = newData.data.products;
        // console.log(data);
        // console.log(products);
        setProducts(products.concat(data));
        setPage(page + 1);
      })
      .catch(setHasMoreData(false));
  }, [page, products]);
  useEffect(() => {
    getProducts(1).then((d) => {
      setProducts(d.data.products);
    });
  }, []);

  // const handleNext = () => {
  //   getProducts(page + 1)
  //     .then((newData) => {
  //       let data = newData.data.products;
  //       // console.log(data);
  //       // console.log(products);
  //       setProducts(products.concat(data));
  //       setPage(page + 1);
  //     })
  //     .catch(setHasMoreData(false));
  // };
  // useEffect(() => {
  //   getProducts(1).then((d) => {
  //     setProducts(d.data.products);
  //   });
  // }, []);

  // getProducts(1).then((d)=>{
  //   setProducts(d.data.products)
  // })
  return (
    <div>
      <Header />
      <HomeBanners />
      {/* <section >
        <Container>
          <ProductList productList={products} />
        </Container>
      </section> */}
      <Container>
        <InfiniteScroll
          dataLength={products.length}
          next={handleNext}
          hasMore={hasMoreData}
          loader={<h4>loading...</h4>}
        >
          {/* <ProductList productList={products} parentRef={parent} /> */}
          <Container className={styles.home_products}>
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard
                  className={styles.home_each_product}
                  product={product}
                />
              </div>
            ))}
          </Container>
        </InfiniteScroll>
      </Container>
    </div>
  );
};

export default Home;
