import styles from "@/components/HomePage/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Product from "@/components/ProductCard/ProductCard";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerImageContainer}>
          <div className={styles.blackTint}></div>
          <Image
            src="/images/home-header-4-2.jpg"
            alt=""
            className={`h-full w-full ${styles.headerImage}`}
            layout="fill"
            // objectFit="cover"
            // quality={100}
            priority={true}
          ></Image>
          <div className={styles.headerText}>
            <p>THE BEST CALISTHENICS SHOP</p>
            <h1>Discover Our Latest Collection and Exclusive Offers</h1>
            <button className={styles.shopButton}>
              <Link href="/shop">SHOP NOW</Link>
            </button>
          </div>
        </div>
        <div className={styles.productsSection}>
          <Product
            title="Gymnast Rings"
            description="High-quality wooden gymnast rings for strength training and
            gymnastics."
            price={49.99}
            image="/images/GymnastRings.webp"
          ></Product>
          <Product
            title="Parallettes"
            description="Durable and stable parallettes for bodyweight exercises and calisthenics."
            price={79.99}
            image="/images/parallettes.webp"
          ></Product>
          <Product
            title="Resistance Bands"
            description="Versatile resistance bands for strength training and rehabilitation exercises."
            price={29.99}
            image="/images/resistanceBands.jpg"
          ></Product>
          <Product
            title="Pull-Up Bar"
            description="Sturdy pull-up bar for upper body workouts and calisthenics."
            price={59.99}
            image="/images/pullupbar.jpg"
          ></Product>
        </div>
      </div>
    </>
  );
}
