import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";

import Soup from "./Components/Soup/Soup";
import Protein from "./Components/Protein/Protein";
import Extras from "./Components/Extras/Extras";
import Beverage from "./Components/Beverage/Beverage";
import Checkout from "./Components/Checkout/Checkout";
import Confirmation from "./Components/Confirmation";
import Delivery from "./Components/Delivery";
import Landing from "./Components/Landing";
import Counter from './Components/Counter';

import './Shop.css'



const Shop = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [deliveryForm, setDeliveryForm] = useState({
    name:'',
    phone:'',
    address: '',
    time: ''
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);


  useEffect(() => {
    //avoid setting values more then once
    if (!isLoaded) {
      loadCartItemsFromStorage();
      loadDeliveryFromStorage();
      setIsLoaded(true);
    }
  });

  const loadDeliveryFromStorage = () => {
      let json = localStorage.getItem('address');
      //to prevent updating on all changes.
      if (json && isLoaded === false) {      
        json = JSON.parse(json);
        let form = {...deliveryForm}
        if (json.address !== form.address && form.address.length <= 0)
          form.address = json.address
        if (json.name !== form.name && form.name.length <= 0)
          form.name=json.name;
        if (json.phone !== form.phone && form.phone.length <= 0)
          form.phone = json.phone;
          if (json.time !== form.time && form.time.length <= 0)
          form.time = json.time;
        setDeliveryForm(form);
            }  
  }

  const loadCartItemsFromStorage =() => {
    const items = Object.values(localStorage);
    let cart = items.map(x => {
      let item = JSON.parse(x);
      if (!item.address)
        return item;
      else {
        console.log('address')
      }//remove empty
    }).filter(x => {
      if (x)
        return x;
    });
    console.log(cart);
    //state is empty, but have values in localstorage. Update state
    if (cartItems.length <= 0 && items.length > 0) {
      calulateTotalQuantity(cart);
      setCartItems(cart);
    }
  }

  //Add items to cart.
  const addingItem = (cartItem, quantity, removedIngredients) => {
    cartItem.removedIngredients = removedIngredients;
    cartItem.quantity = quantity;
    cartItem.uid = uuidv4();

    const copy = [...cartItems];
    copy.push(cartItem);
    setCartItems(copy);
    addToLocalStorage(cartItem);
    calulateTotalQuantity(copy);
  };

  const calulateTotalQuantity = (allItems) => {
    let count = 0;
    allItems.forEach((x) => {
     //if(isNan(x.quantity) )
      count = Number(count) + Number(x.quantity);
    });
    console.log(count);
    setTotalQuantity(count);
  }

  const removeFromCart = (cartItem) => {
    let hardCopy = [...cartItems];
    console.log(cartItem.uid);    console.log(hardCopy);
    hardCopy = hardCopy.filter(x => {
     if(cartItem.uid !== x.uid)
      return x;
    });
    console.log(hardCopy);

    removeFromLocalStorage(cartItem);
    setCartItems(hardCopy);
    console.log(hardCopy);
    calulateTotalQuantity(hardCopy);
  };

  const addToLocalStorage = (cartItem) => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem(cartItem.uid, json);
  };
  const removeFromLocalStorage = (cartItem) => {
    if (cartItem)
      localStorage.removeItem(cartItem.uid)
  };
  let isMenuPage = props.activePath === "soup" ||props.activePath === "protein" || props.activePath === "extras" || props.activePath === "beverage";

  return (
    <div>
      {isMenuPage ? <Counter quantity ={totalQuantity}/> : null }

      {props.activePath === "soup" ? (
        <Soup
          addToCart={(cartItem, qty, removed) =>
            addingItem(cartItem, qty, removed)
          }
          quantity={totalQuantity}
        />
      ) : null}
      {props.activePath === "protein" ? (
        <Protein addToCart={(x) => addingItem(x)} />
      ) : null}
      {props.activePath === "extras" ? (
        <Extras addToCart={(x) => addingItem(x)} />
      ) : null}
      {props.activePath === "beverage" ? (
        <Beverage addToCart={(x) => addingItem(x)}
         />
      ) : null}

      {props.activePath === "checkout" ? (
        <Checkout
          cart={cartItems}
          addToCart={(x) => addingItem(x)}
          onRemoveItem={(item) => removeFromCart(item)}
          formdata={deliveryForm}
        />
      ) : null}
      {/* {props.activePath === "confirmation" ? (
        <Confirmation cart={cartItems} formdata={deliveryForm} />
      ) : null} */}
      {isLoaded && props.activePath === "delivery" ? (
        <Delivery
          {...props}
          initialValues={deliveryForm}
          addressForm={(x) => setDeliveryForm(x)}
          cart={cartItems}
        />
      ) : null}
      {props.activePath === "landing" ? (
        <Landing
          cart={cartItems}
          addToCart={(x) => addingItem(x)}
          onRemoveItem={(item) => removeFromCart(item)}
        />
      ) : null}
    </div>
  );
};

export default Shop;
