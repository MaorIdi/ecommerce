"use client";
import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";

type ProductProps = {
  title: string;
  description: string;
  price: number;
  image: string;
};

const Product = (props: ProductProps) => {
  const [showImage, setShowImage] = React.useState(false);
  const handleExpand = (e: any) => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };
  return (
    <>
      {showImage && (
        <>
          <div
            className={styles.outClick}
            onClick={(e) => {
              if ((e.target as HTMLElement).tagName !== "I") {
                setShowImage(!showImage);
              }
              if (document.fullscreenElement) {
                document.exitFullscreen();
              }
            }}
          >
            <div className={styles.topRow}>
              <div className={styles.topRowInner}>
                <i className="fa-regular fa-magnifying-glass"></i>
                <i
                  className="fa-light fa-expand-wide"
                  onClick={handleExpand}
                ></i>
                <i
                  className={`fa-light fa-xmark ${styles.closeBtn}`}
                  onClick={() => setShowImage(!showImage)}
                ></i>
              </div>
            </div>
          </div>
          <div className={styles.imgPopup}>
            <Image src={props.image} layout="fill" alt=""></Image>
          </div>
        </>
      )}
      <div className={styles.productCard}>
        <div className={styles.productImageOuter}>
          <Image
            src={props.image}
            alt="Gymnast Rings"
            layout="fill"
            className={styles.productImage}
            onClick={() => setShowImage(!showImage)}
            // width={500}
            // height={500}
          />
        </div>
        <div className={styles.productDetails}>
          <h2> {props.title}</h2>
          <p>{props.description}</p>
          <span>${props.price}</span>
          <button className={styles.addToCardBtn}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Product;
