import { createContext, useState, useEffect } from "react";

// create context
export const CartContext = createContext();

function CartProvider({ children }) {
  // cart state
  const [cart, setCart] = useState([]);

  // item amount
  const [itemAmount, setItemAmount] = useState(0);

  //total
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumlator, currentItem) => {
      return accumlator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });

  //update item amount on icon
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumlator, currentItem) => {
        return accumlator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    // check if item is already in cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    //if item already exist in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // remove item
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //clear cart
  const clearCart = () => {
    setCart([]);
  };

  //increase amount(items)
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  //reduce amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
