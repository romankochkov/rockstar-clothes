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
          <div className="row g-5">
            <div className="col-12">
              <div className={styles.title}>Products</div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
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
                  <div className={styles.colors}>
                    <div className={styles.white}></div>
                    <div className={styles.gray}></div>
                    <div className={styles.black}></div>
                  </div>

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

            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
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
                  <div className={styles.name}>Shorts</div>
                  <div className={styles.colors}>
                    <div className={styles.white}></div>
                    <div className={styles.gray}></div>
                    <div className={styles.black}></div>
                  </div>

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
          <div className="row g-5">
            <div className="col-2">
              <div className={styles.logo}>
                <Image
                  src="/logo.svg"
                  width={32}
                  height={32}
                  quality={100}
                  alt="LOGO"
                />
              </div>
              <div className={styles.warning}>Rockstar Games Clothes has nothing<br></br>to do with Rockstar Games company</div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className={styles.links}>
                <div className={styles.topic}>Store</div>
                <div className={styles.link}><a>Products</a></div>
                <div className={styles.link}><a>Tracking</a></div>
                <div className={styles.link}><a>Support</a></div>
              </div>
              <div className={styles.links}>
                <div className={styles.topic}>Platform</div>
                <div className={styles.link}><a>Cookie Policy</a></div>
                <div className={styles.link}><a>Privacy Policy</a></div>
                <div className={styles.link}><a>Terms of Use</a></div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
              <div className="d-flex justify-content-end">
                <div className={styles.language}>
                  <i className="fa-regular fa-globe"></i>
                  <div className={styles.title}>English</div>
                  <i className="fa-regular fa-angle-down"></i>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <div className={styles.social}>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-x-twitter"></i>
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-amazon"></i>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className={styles.copyright}>Rockstar Games Clothes. All rights reserved</div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
