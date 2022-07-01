import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import {useEffect, useState} from 'react'

function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState({})
  const [subtotal, setsubtotal] = useState(0)

  useEffect(() => {
    console.log("hey im a useeffect from app.js")
    try{
      if(localStorage.getItem('cart')){
        setcart(JSON.parse(localStorage.getItem('cart')))
       }
    }catch(error)
    {console.error(error);
    localStorage.clear()}

  }, [])

  const saveCart = (myCart)=>{
    localStorage.setItem("cart", myCart)
    let subt = 0;
    let keys = Object.keys(myCart)
    for(let i=0 ; i<keys.length ; i++)
    {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setsubtotal(subt)
  }

  const addtocart =(itemCode, qty, price, name, size, variant)=>{
    console.log(itemCode, qty, price, name, size, variant)
      let newCart = cart;
      if(itemCode in cart){
        newCart[itemCode].qty = cart[itemCode].qty + qty;
      }
      else
      {
        newCart[itemCode] = {qty : 1, price, name, size, variant}
      }
      setcart(newCart)
      saveCart(newCart)
  }

  const clearCart = ()=>{
    setcart({})
    saveCart({})
  }
  const removeFromCart =(itemCode, qty, price, name, size, variant)=>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if(newCart[itemCode]["qty"]<=0){
      delete newCart[itemCode]
    }
    setcart(newCart)
    saveCart(newCart)
}
  return <>
  <Navbar cart={cart} addtocart={addtocart} removeFromCart={removeFromCart} clearCart={clearCart} subtotal={subtotal}/>
  <Component cart={cart} addtocart={addtocart} removeFromCart={removeFromCart} clearCart={clearCart} subtotal={subtotal}{...pageProps} />
  <Footer></Footer>
  </>
}

export default MyApp
