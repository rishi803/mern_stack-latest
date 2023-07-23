import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
  UPDATE_ORDER_HISTORY,
} from "../constants/cartConstants";
import axios from "axios";

// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/product/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.Stock,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};


export const buyItem = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/product/${id}`);

  // Create an order object or perform any other actions related to purchasing the item
  const order = {
    product: data.product._id,
    name: data.product.name,
    price: data.product.price,
    image: data.product.images[0].url,
    stock: data.product.Stock,
    quantity,
    // Add any other required fields for the order
  };

  // Save the order in the database
  await axios.post(`/api/v1/orders`, order);

  // Perform additional actions, such as generating an invoice or sending a confirmation email

  // Dispatch any necessary actions related to the purchase, such as updating the user's order history, etc.
  dispatch({
    type: UPDATE_ORDER_HISTORY,
    payload: {
      product: order.product,
      name: order.name,
      price: order.price,
      image: order.image,
      stock: order.stock,
      quantity: order.quantity,
    },
  });

  // Clear the cart or perform other necessary actions after the item is purchased


  // Save the updated cart items in the local storage
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cart.cartItems)
  );

};


// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
