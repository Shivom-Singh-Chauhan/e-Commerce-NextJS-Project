import { useState, useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState({});
  const [subtotal, setsubtotal] = useState(0);

  useEffect(() => {
    console.log("hey im a useeffect from _app.js4");
    try {
      console.log("hey im a useeffect from app.js2");
      console.log(JSON.stringify(localStorage.getItem("cart")));
      if (localStorage.getItem("cart")) {
        console.log("line1");
        setcart(JSON.parse(localStorage.getItem("cart")));
        saveCart(cart);
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
      console.log("hey im a useeffect from app.js3");
    }
  }, []);

  const saveCart = (myCart) => {
    console.log(JSON.stringify(cart) + "-1-" + JSON.stringify(myCart));
    localStorage.setItem("cart", myCart);
    // const data = localStorage.getItem("cart")
    //  console.log(data);
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setsubtotal(subt);
  };

  const addtocart = (itemCode, qty, price, name, size, variant) => {
    // console.log(itemCode, qty, price, name, size, variant);
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setcart(newCart);
    saveCart(JSON.stringify(newCart));
  };

  const clearCart = () => {
    setcart({});
    saveCart({});
  };
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setcart(newCart);
    saveCart(newCart);
  };
  return (
    <>
      <Navbar
        key={subtotal}
        cart={cart}
        addtocart={addtocart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subtotal={subtotal}
      />
      <Component
        cart={cart}
        addtocart={addtocart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subtotal={subtotal}
        {...pageProps}
      />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
