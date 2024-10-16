"use client";

import { useState, useRef } from "react";

import { useCart } from "@/contexts/Cart";

import { motion, AnimatePresence } from "framer-motion";

import clsx from "clsx";
import toast from "react-hot-toast";

import lib_toaster from "@iunstable0/website-libs/build/toaster";

import lib_axios from "@iunstable0/server-libs/build/axios";

import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import CartItem from "@/components/cart/CartItem";

import cartStyles from "@/styles/cart.module.scss";
import inputStyles from "@/styles/input.module.scss";

export default function Cart() {
  const { cart, clearCart } = useCart();

  const [lookingUpUser, setLookingUpUser] = useState<boolean>(false);
  const [lookingUpDiscord, setLookingUpDiscord] = useState<boolean>(false);

  const userInputRef = useRef<HTMLInputElement>(null);
  const discordInputRef = useRef<HTMLInputElement>(null);

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
      {/*<PopoverContent>*/}
      <PopoverContent
        className={clsx(cartStyles.cartPopover, {
          [cartStyles.cartPopover_notEmpty]: cart.length > 0,
        })}
      >
        {cart.length === 0 ? (
          <div className={cartStyles.cartEmpty}>Cart is empty</div>
        ) : (
          <div className={cartStyles.cartItems}>
            {/*<AnimatePresence>*/}
            {cart.slice(0, 3).map((item) => (
              <motion.div
                key={item.cart_id}
                layout
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                // exit={{ x: +100, opacity: 0 }}
                transition={{
                  duration: 0.1,
                  // staggerChildren: 0.1,
                  ease: "easeOut",
                }}
              >
                <CartItem key={item.product_id} product={item} />
              </motion.div>
              // <div key={index} className={cartStyles.item}>
              //   <div className={cartStyles.cartItemName}>{item.name}</div>
              //   <div className={cartStyles.cartItemPrice}>${item.price}</div>
              // </div>
            ))}
            {/*</AnimatePresence>*/}
          </div>
        )}

        {cart.length > 3 && (
          <div className={cartStyles.seeMore}>
            <Button
              variant="text"
              color="primary"
              onClick={() => {
                toast.error("Not implemented yet.");
              }}
            >
              See more
            </Button>
          </div>
        )}

        {cart.length > 0 && (
          <div>
            <div
              className={clsx(
                inputStyles.inputField,
                //     , {
                //   [formStyles["input-field-error"]]: inputState[input.name] === false,
                //   [formStyles["input-field-success"]]:
                //     inputState[input.name] === true,
                // }
              )}
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
                      // alert(value);
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
            </div>

            <div
              className={clsx(
                inputStyles.inputField,
                //     , {
                //   [formStyles["input-field-error"]]: inputState[input.name] === false,
                //   [formStyles["input-field-success"]]:
                //     inputState[input.name] === true,
                // }
              )}
            >
              <input
                className={inputStyles.input}
                type="text"
                autoComplete="off"
                placeholder="Discord user ID"
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
                      // alert(value);
                    }
                  }, 1500);
                }}
                style={{
                  textAlign: "left",
                  // width: "100px",
                  paddingLeft: "0",
                }}
                disabled={lookingUpDiscord}
                ref={discordInputRef}
              />
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
                      discordId: discordInputRef.current?.value,
                      cart,
                    },
                  })
                  .then((response) => {
                    console.log(response);

                    clearCart();
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              }}
            >
              Checkout
            </Button>
          </div>
        )}
        {/*<IconButton color="inherit" className={cartStyles.clearButton}>*/}
        {/*  <ShoppingCartIcon />*/}
        {/*  {cart.length > 0 && (*/}
        {/*    <div className={cartStyles.cartCount}>{cart.length}</div>*/}
        {/*  )}*/}
        {/*</IconButton>*/}
      </PopoverContent>
    </Popover>
  );
}
