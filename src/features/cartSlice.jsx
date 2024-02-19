import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getLocalStorage = () => {
    let cart = localStorage.getItem("cart");
    if (cart) return JSON.parse(localStorage.getItem("cart"));
    else return [];
};

const initialState = {
    isLoading: false,
    isError: false,
    cart_products: getLocalStorage(),
    totalItems: 0,
    tax: 9,
    subtotal: 0,
    totalAmount: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // ! add to cart function
        addToCart: (state, { payload }) => {
            let cartTempProducts = [...state.cart_products];
            const exist = cartTempProducts.find((item) => item.id === payload.id);
            if (exist) {
                let thePrd = cartTempProducts.find((item) => item.id === payload.id);
                thePrd.amount += payload.amount;
                state.cart_products = [...cartTempProducts];
                localStorage.setItem("cart", JSON.stringify(state.cart_products));
                toast.success(`Product Amount Has Been Increased`);
                return;
            }

            state.cart_products = [...cartTempProducts, payload];
            localStorage.setItem("cart", JSON.stringify(state.cart_products));
            toast.success("Product Added To Cart!");
        },

        // ! toggle product amount
        toggleAmount: (state, { payload }) => {
            let thePrd = cartTempProducts.find((item) => item.id === payload.id);

            if (payload.type === "change") {
                if (payload.value < 1) return;
                thePrd.amount = payload.value;
            }

            if (payload.type === "inc") thePrd.amount = payload.value + 1;

            if (payload.type === "dec") {
                if (thePrd.amount <= 1) return;
                thePrd.amount--;
            }

            localStorage.setItem("cart", JSON.stringify(state.cart_products));
        },

        // ! remove item
        removeItem: (state, { payload }) => {
            let tempCartProducts = [...state.cart_products];
            tempCartProducts = tempCartProducts.filter((product) => product.id !== payload);
            state.cart_products = [...tempCartProducts];
            localStorage.setItem("cart", JSON.stringify(state.cart_products));
        },

        // ! clear cart
        clearCart: (state) => {
            state.cart_products = [];
            localStorage.setItem("cart", JSON.stringify(state.cart_products));
        },

        // ! update totals
        updateTotals: (state) => {
            const { totalItems, totalAmount } = state.cart_products.reduce(
                (total, cartItem) => {
                    const { amount, price } = cartItem;
                    total.totalItems += amount;
                    total.totalAmount += amount * parseInt(price);
                    return total;
                },
                {
                    totalItems: 0,
                    totalAmount: 0,
                }
            );

            state.totalItems = totalItems;
            state.subtotal = totalAmount;
            state.totalAmount = totalAmount + state.tax;
        },
    },
});

export const { addToCart, toggleAmount, removeItem, updateTotals, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
