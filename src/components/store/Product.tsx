"use client";

import { useState } from "react";

import Image from "next/image";

import clsx from "clsx";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useCart } from "@/contexts/Cart";

import storeStyles from "@/styles/store.module.scss";

export default function Product({ product }: { product: any }) {
  const { addToCart } = useCart();

  const [clickEvent, setClickEvent] = useState<boolean>(false);

  const handleOnClick = () => {
    setClickEvent(true);

    setTimeout(() => {
      setClickEvent(false);
    }, 200);
  };

  const handleCartButton = (e, product) => {
    e.stopPropagation();

    // let cart: any = localStorage.getItem("cart");
    //
    // if (cart) {
    //   cart = JSON.parse(cart);
    // } else {
    //   cart = [];
    // }
    //
    // cart.push(product);
    //
    // localStorage.setItem("cart", JSON.stringify(cart));
    // console.log("Add to Cart button clicked");

    addToCart(product);
  };

  return (
    <div
      className={clsx(storeStyles.product, {
        [storeStyles.product_clicked]: clickEvent,
      })}
      onClick={handleOnClick}
    >
      <div className={storeStyles.productHeader}>
        <Image
          src={`/images/${product.image}.png`}
          alt="Product"
          width={56}
          height={56}
        />

        <div className={storeStyles.productInfo}>
          <h2 className={storeStyles.productDisplayName}>
            {product.product_display_name}
          </h2>
          <p className={storeStyles.productName}>{product.product_name}</p>
          <h2 className={storeStyles.productPrice}>${product.price}</h2>
        </div>
      </div>

      <div className={storeStyles.productSeperator} />

      <div className={storeStyles.productBody}>
        <p className={storeStyles.productDescription}>
          {product.product_description}
        </p>
      </div>

      <div className={storeStyles.productFooter}>
        <div></div>
        {/*<IconButton*/}
        {/*  size="small"*/}
        {/*  sx={() => ({*/}
        {/*    color: "#7499c5",*/}
        {/*  })}*/}
        {/*>*/}
        {/*  <AddShoppingCartIcon onClick={handleCartButton} />*/}
        {/*</IconButton>*/}
        <Button
          size="small"
          variant="contained"
          onClick={(e) => handleCartButton(e, product)}
          className={storeStyles.addToCartButton}
          // sx={(theme) => ({
          //   backgroundColor: "#7499c5",
          // })}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
