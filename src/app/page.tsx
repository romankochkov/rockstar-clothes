import Image from "next/image";
import styles from "./page.module.scss";
import 'bootstrap/dist/css/bootstrap-grid.css';
import '@awesome.me/kit-6f3371cce5/icons/css/all.css'
import "./bootstrap.css";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.poster}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <Image
                  src="/poster.png"
                  className={styles.image}
                  width={1200}
                  height={400}
                  quality={100}
                  alt="POSTER"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.products}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.title}>Products</div>
            </div>
            <div className="col-6">
              <div className={styles.product}>
                <Image
                  src="/product-wallpaper.png"
                  className={styles.image}
                  width={560}
                  height={200}
                  quality={100}
                  alt="PRODUCT"
                />
                <div className={styles.info}>
                  <div className={styles.name}>T-Shirts</div>
                  <div className={styles.sizes}>
                    <div className={styles.label}>Sizes:</div>
                    <div className={styles.size}>S</div>
                    <div className={styles.size}>M</div>
                    <div className={styles.size}>L</div>
                    <div className={styles.size}>XL</div>
                    <div className={styles.size}>XXL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.logo}>
                <Image
                  src="/logo.svg"
                  width={32}
                  height={32}
                  quality={100}
                  alt="LOGO"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
