"use client";
import styles from "@/components/Navbar/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  const onLogoClick = () => {
    router.push("/");
  };
  return (
    <nav>
      <div className={styles.navbarContainer}>
        <div className={styles.navbar}>
          <div className={styles.navLeft}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={styles.navCenter}>
            <Image
              src="/ascend-white.svg"
              alt="logo"
              width={150}
              height={50}
              className={styles.logo}
              onClick={onLogoClick}
            />
          </div>
          <div className={styles.navRight}>
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
