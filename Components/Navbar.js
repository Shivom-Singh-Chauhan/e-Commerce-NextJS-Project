import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
} from "react-icons/ai";
import { MdCancelPresentation, MdAccountCircle } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";
import { useRef } from "react";

const Navbar = ({ cart, addtocart, removeFromCart, clearCart, subtotal }) => {
  // console.log(cart, addtocart, removeFromCart, clearCart, subtotal);
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-between items-center  py-2 shadow-xl sticky top-0 bg-blue-400 z-10">
      <div className="logo">
        <Image
          width={150}
          height={40}
          src="/shopforfashionlogo.jpg"
          alt=""
        ></Image>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-md">
          <Link href={"/hoodies"}>
            <a>
              {" "}
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href={"/sticker"}>
            <a>
              {" "}
              <li>Stickers</li>
            </a>
          </Link>
          <Link href={"/mugs"}>
            <a>
              {" "}
              <li>Mugs</li>
            </a>
          </Link>
          <Link href={"/tshirt"}>
            <a>
              {" "}
              <li>T shirt</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-2 mx-5 cursor-pointer flex">
        <Link href={"/Login"}>
          <MdAccountCircle className="text-xl md:text-2xl " />
        </Link>
        <AiOutlineShoppingCart
          className="text-xl md:text-2xl mx-2"
          onClick={toggleCart}
        />
      </div>
      <div
        ref={ref}
        className="w-72 h-[100vh] sideCart absolute top-0 right-0 bg-blue-300 p-7 transition-transform translate-x-full"
      >
        <h2 className="font-bold text-xl">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-2 right-2 cursor-pointer text-xl text-blue-900"
        >
          <MdCancelPresentation />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-semibold">
              No Items Present In The Cart. Please Add few Items to Check out
            </div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-3">
                  <div className="w-2/3 font-semibold">{cart[k].name}</div>
                  <div className="flex font-semibold items-center justify-center w-1/3 text-lg ">
                    <AiOutlinePlusSquare
                      onClick={() => {
                        addtocart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer  text-blue-900"
                    />
                    <span className="mx-2">{cart[k].qty}</span>
                    <AiOutlineMinusSquare
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-blue-900"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="font-bold my- 2">SubTotal: {subtotal} </div>
        <div className="flex">
          {" "}
          <Link href={"/checkout"}>
            <button className="flex mr-2 text-white bg-blue-600 py-1 px-2 hover:bg-blue-900 rounded text-sm">
              Checkout
              <BsHandbag className="flex mx-auto mx-2 my-1 " />
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex mr-2 text-white bg-blue-600 py-1 px-2 hover:bg-blue-900 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
