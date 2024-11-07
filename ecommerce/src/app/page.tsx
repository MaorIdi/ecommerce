import styles from "@/components/HomePage/Home.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.headerImageContainer}>
        <div className={styles.blackTint}></div>
        <Image
          src="/home-header-4-2.jpg"
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
    </div>
  );
}
