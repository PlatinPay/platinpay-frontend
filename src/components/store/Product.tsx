"use client";

import { useState } from "react";

import Image from "next/image";

import clsx from "clsx";

import storeStyles from "@/styles/store.module.scss";

export default function Product({ product }: { product: any }) {
  const [clickEvent, setClickEvent] = useState<boolean>(false);

  const handleOnClick = () => {
    setClickEvent(true);

    setTimeout(() => {
      setClickEvent(false);
    }, 200);
  };

  return (
    <div
      className={clsx(storeStyles.product, {
        [storeStyles.product_clicked]: clickEvent,
      })}
      onClick={handleOnClick}
    >
      <div className={storeStyles.product_header}>
        <Image src="/images/product.png" alt="Product" width={56} height={56} />

        <div className={storeStyles.product_info}>
          <h2 className={storeStyles.product_display_name}>
            {product.product_display_name}
          </h2>
          <p className={storeStyles.product_name}>{product.product_name}</p>
          <h2 className={storeStyles.product_price}>${product.price}</h2>
        </div>
      </div>

      <div className={storeStyles.product_seperator} />

      <div className={storeStyles.product_body}>
        <p className={storeStyles.product_description}>
          {product.product_description}
        </p>
      </div>
    </div>
  );
}
