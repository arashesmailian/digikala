import React from "react";
import { HomeBanners, CategoryItems, Container } from "../../components";
import styles from "./home.style.module.css";

const Home = () => {
  return (
    <div>
      <HomeBanners />
      <section>
        <Container>
          <CategoryItems title="shoes" products={products} />
        </Container>
      </section>
    </div>
  );
};

export default Home;
