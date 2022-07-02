import { useState } from "react";
import { ReactComponent as SiteLogo } from "../../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import styles from "./header.style.module.css";
import { BiCart, BiLogOut, BiUser } from "react-icons/bi";
import { useSelector } from "react-redux";
import CartMenu from "../CartMenu/CartMenu";

const Header = () => {
  const [show, setShow] = useState(false);
  const total_count = useSelector((state) =>
    state.cart.items.reduce((count, item) => count + item?.count, 0)
  );

  return (
    <>
      <header className={styles.Header}>
        <div className={styles.header_top}>
          <div className={styles.header_top_left}>
            <div
              onMouseEnter={() => setShow(true)}
              style={{
                position: "relative",
              }}
            >
              <BiCart size={"28px"} />
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "20px",
                  padding: 3,
                  fontWeight: 700,
                  position: "absolute",
                  left: 0,
                  top: 15,
                }}
              >
                {total_count}
              </div>
              <CartMenu show={show} setShow={setShow} />
            </div>
            <div>
              <BiUser size={"28px"} />
            </div>
            <div
              style={{
                cursor: "pointer",
              }}
            >
              <BiLogOut size={"28px"} />
            </div>
          </div>
          <div className={styles.header_top_left}>
            <input className={styles.input} />
            <Link to="/">
              <SiteLogo />
            </Link>
          </div>
        </div>
      </header>
      <div style={{ height: 90 }} />
    </>
  );
};

export default Header;
