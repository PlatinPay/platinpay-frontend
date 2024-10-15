"use client";

import { useState } from "react";

import Image from "next/image";

import clsx from "clsx";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { useCart } from "@/contexts/Cart";

import cartStyles from "@/styles/cart.module.scss";

export default function Product({ product }: { product: any }) {
  const { removeFromCart } = useCart();

  const [clickEvent, setClickEvent] = useState<boolean>(false);
  const [removeEvent, setRemoveEvent] = useState<boolean>(false);

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

    setRemoveEvent(true);

    setTimeout(() => {
      removeFromCart(product);
    }, 150);
  };

  return (
    <div
      className={clsx(cartStyles.product, {
        [cartStyles.product_clicked]: clickEvent,
        [cartStyles.product_removing]: removeEvent,
      })}
      onClick={handleOnClick}
    >
      <div className={cartStyles.productHeader}>
        <Image
          src={`/images/${/\.\w+$/.test(product.image) ? product.image : `${product.image}.png`}`}
          alt="Product"
          width={42}
          height={42}
        />

        <div className={cartStyles.productInfo}>
          <h2 className={cartStyles.productDisplayName}>
            {product.product_display_name}
          </h2>
          <p className={cartStyles.productName}>{product.product_name}</p>
          <h2 className={cartStyles.productPrice}>${product.price}</h2>
        </div>
      </div>

      <div className={cartStyles.productFooter}>
        <div></div>
        <IconButton
          size="small"
          sx={() => ({
            color: "#7499c5",
          })}
          className={cartStyles.removeFromCartButton}
        >
          <DeleteOutlineIcon onClick={(e) => handleCartButton(e, product)} />
        </IconButton>
        {/*<Button*/}
        {/*  size="small"*/}
        {/*  variant="contained"*/}
        {/*  onClick={(e) => handleCartButton(e, product)}*/}
        {/*  className={cartStyles.removeFromCartButton}*/}
        {/*  // sx={(theme) => ({*/}
        {/*  //   backgroundColor: "#7499c5",*/}
        {/*  // })}*/}
        {/*>*/}
        {/*  Remove from Cart*/}
        {/*</Button>*/}
      </div>
    </div>
  );
}
