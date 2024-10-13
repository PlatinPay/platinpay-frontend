"use client";

import { useState, useRef } from "react";

import { useCart } from "@/contexts/Cart";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import clsx from "clsx";

import lib_toaster from "@iunstable0/website-libs/build/toaster";

import lib_axios from "@iunstable0/server-libs/build/axios";

import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import cartStyles from "@/styles/cart.module.scss";
import inputStyles from "@/styles/input.module.scss";

export default function Cart() {
  const { cart } = useCart();

  const [lookingUpUser, setLookingUpUser] = useState<boolean>(false);

  const userInputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   //   Local storage cart get
  //   const cart = localStorage.getItem("cart");
  //
  //   if (cart) {
  //     setCart(JSON.parse(cart));
  //   }
  // }, []);

  return (
    <Popover>
      <PopoverTrigger>
        <IconButton color="inherit" className={cartStyles.cartButton}>
          <ShoppingCartIcon />
          {cart.length > 0 && (
            <div className={cartStyles.cartCount}>{cart.length}</div>
          )}
        </IconButton>
      </PopoverTrigger>
      <PopoverContent className={cartStyles.cartPopover}>
        {cart.length === 0 ? (
          <div className={cartStyles.cartEmpty}>Cart is empty</div>
        ) : (
          <div className={cartStyles.items}>
            {cart.map((item, index) => (
              <div key={index} className={cartStyles.item}>
                <div className={cartStyles.cartItemName}>{item.name}</div>
                <div className={cartStyles.cartItemPrice}>${item.price}</div>
              </div>
            ))}
          </div>
        )}

        {/*<IconButton color="inherit" className={cartStyles.clearButton}>*/}
        {/*  <ShoppingCartIcon />*/}
        {/*  {cart.length > 0 && (*/}
        {/*    <div className={cartStyles.cartCount}>{cart.length}</div>*/}
        {/*  )}*/}
        {/*</IconButton>*/}

        <div
          className={clsx(
            inputStyles.inputField,
            //     , {
            //   [formStyles["input-field-error"]]: inputState[input.name] === false,
            //   [formStyles["input-field-success"]]:
            //     inputState[input.name] === true,
            // }
          )}
          style={{
            marginTop: "32px",
          }}
        >
          <input
            className={inputStyles.input}
            type="text"
            autoComplete="off"
            placeholder="IGN"
            required={true}
            onChange={async (e) => {
              e.preventDefault();

              const value = e.target.value;

              setTimeout(async () => {
                if (value === e.target.value) {
                  // setLookingUpUser(true);

                  // axios
                  // await axios
                  //   .get(
                  //     `https://api.mojang.com/users/profiles/minecraft/${value}`,
                  //   )
                  //   .then((response) => {
                  //     console.log(response.data);
                  //   })
                  //   .catch((error) => {
                  //     console.error(error);
                  //   });

                  // lib_axios
                  //   .request({
                  //     method: "POST",
                  //     baseURL: "http://localhost:3001",
                  //     url: `/user/checkout`,
                  //     data: {
                  //       cart,
                  //     },
                  //   })
                  //   .then((response) => {
                  //     console.log(response);
                  //   })
                  //   .catch((error) => {
                  //     console.error(error);
                  //   });

                  // console.log("Looking up user", value);

                  alert(value);
                }
              }, 1500);
            }}
            style={{
              textAlign: "left",
              // width: "100px",
              paddingLeft: "0",
            }}
            disabled={lookingUpUser}
            ref={userInputRef}
          />

          {/*<div*/}
          {/*  style={{*/}
          {/*    background: "rgba(89,89,89,0.8)",*/}
          {/*    width: "1.25px",*/}
          {/*    height: "80%",*/}
          {/*    margin: "0 8px 0 8px",*/}
          {/*    borderRadius: "4px",*/}
          {/*  }}*/}
          {/*/>*/}

          {/*<div*/}
          {/*  style={{*/}
          {/*    color: "#4b4b4b",*/}
          {/*    cursor: "not-allowed",*/}
          {/*    userSelect: "none",*/}
          {/*  }}*/}
          {/*>*/}
          {/*  Test*/}
          {/*</div>*/}
        </div>

        <Button
          variant="contained"
          color="primary"
          className={cartStyles.checkoutButton}
          onClick={async () => {
            lib_axios
              .request({
                method: "POST",
                baseURL: "http://localhost:3001",
                url: `/user/checkout`,
                data: {
                  ign: userInputRef.current?.value,
                  cart,
                },
              })
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.error(error);
              });
          }}
        >
          Checkout
        </Button>
      </PopoverContent>
    </Popover>
  );
}
