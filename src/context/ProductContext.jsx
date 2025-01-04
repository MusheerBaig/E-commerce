import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsData } from "../constants";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [listOfProducts, setListOfProducts] = useState(productsData);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  function handleAddToCart(getproductDetails) {
    let copyExistingCartItems = [...cartItems];
    const findIndexOfCurrentItem = copyExistingCartItems.findIndex(
      (cartItem) => cartItem.id === getproductDetails.id
    );

    console.log(findIndexOfCurrentItem);

    if (findIndexOfCurrentItem === -1) {
      copyExistingCartItems.push({
        ...getproductDetails,
        quantity: 1,
        totalPrice: getproductDetails?.price,
      });
    } else {
      console.log("its coming here");
      copyExistingCartItems[findIndexOfCurrentItem] = {
        ...copyExistingCartItems[findIndexOfCurrentItem],
        quantity: copyExistingCartItems[findIndexOfCurrentItem].quantity + 1,
        totalPrice:
          (copyExistingCartItems[findIndexOfCurrentItem].quantity + 1) *
          copyExistingCartItems[findIndexOfCurrentItem].price,
      };
    }

    console.log(copyExistingCartItems, "copyExistingCartItems");
    setCartItems(copyExistingCartItems);
    localStorage.setItem("cartItems", JSON.stringify(copyExistingCartItems));
    navigate("/cart");
  }

  function handleRemoveFromCart(getproductDetails, isFullyRemoveFromCart) {
    let copyExistingCartItems = [...cartItems];
    const findIndexOfCurrentCartItem = copyExistingCartItems.findIndex(
      (item) => item.id === getproductDetails.id
    );

    if (isFullyRemoveFromCart) {
      copyExistingCartItems.splice(findIndexOfCurrentCartItem, 1);
    } else {
      copyExistingCartItems[findIndexOfCurrentCartItem] = {
        ...copyExistingCartItems[findIndexOfCurrentCartItem],
        quantity:
          copyExistingCartItems[findIndexOfCurrentCartItem].quantity - 1,
        totalPrice:
          (copyExistingCartItems[findIndexOfCurrentCartItem].quantity - 1) *
          copyExistingCartItems[findIndexOfCurrentCartItem].price,
      };
    }
    localStorage.setItem("cartItems", JSON.stringify(copyExistingCartItems));
    setCartItems(copyExistingCartItems);
  }

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems") || "[]"));
  }, []);

  // console.log(cartItems);

  return (
    <ShoppingCartContext.Provider
      value={{
        listOfProducts,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        handleAddToCart,
        cartItems,
        handleRemoveFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
