// import { createSlice } from '@reduxjs/toolkit';

// const initialState = [];

// const cartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers : {
//         addItems : (state, action) => {
//             state.push(action.payload);
//         },

//         removeItem : (state, action) => {
//             return state.filter(item => item.id != action.payload)
//         }
//     }
// });

// export const { addItems, removeItem } = cartSlice.actions;
// export default cartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity; // Update quantity if item exists
            } else {
                state.push(action.payload); // Add new item if it doesn't exist
            }
        },

        removeItem: (state, action) => {
            return state.filter(item => item.id !== action.payload); // Returns new state
        },

        // updateItemQuantity: (state, action) => {
        //     const item = state.find(item => item.id === action.payload.id);
        //     if (item) {
        //         item.quantity = action.payload.quantity; // Update quantity
        //     }
        // }

        removeAllItems : (state) => {
            return [];
        }
    }
});

export const getTotalPrice = (state) => state.cart.reduce((total, item) => total + item.price, 0); 
export const { addItems, removeItem,removeAllItems } = cartSlice.actions;
export default cartSlice.reducer;
