'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import styles from '../app/page.module.scss';

export default function Navbar() {
    const [scrollY, setScrollY] = useState(0);
    const [hideNav, setHideNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 200) {
                setHideNav(true);
            } else {
                setHideNav(false);
            }
            setScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    return (
        <nav className={`${styles.nav} ${hideNav ? styles.hide : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-2">
                        <div className="d-flex justify-content-start" style={{ height: '100%' }}>
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
                    <div className="d-none d-lg-block col-lg-8">
                        <div className="d-flex justify-content-center" style={{ height: '100%' }}>
                            <div className={styles.links}>
                                <div className={styles.home}><a href="/">Home</a></div>
                                <div className={styles.tshirts}><a href="/t-shirts">T-Shirts</a></div>
                                <div className={styles.shorts}><a href="/shorts">Shorts</a></div>
                                <div className={styles.tracking}><a href="/tracking">Tracking</a></div>
                                <div className={styles.news}><a href="/news">News</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-2">
                        <div className="d-flex justify-content-end" style={{ height: '100%' }}>
                            <Image
                                src="/usa.svg"
                                className={`${styles.language} d-none d-md-block`}
                                width={28.5}
                                height={18}
                                quality={100}
                                alt="EN"
                            />
                            <div className={styles.cart}><i className="fa-regular fa-cart-shopping"></i></div>
                            <div className={`${styles.sidebar} d-block d-lg-none`}><i className="fa-solid fa-bars"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
