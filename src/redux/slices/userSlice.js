import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id: "",
    username: "",
    phoneNumber: "",
    role: "",
    img:"",
    status: "",
    isAuth: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser : ( state, action) => {
            const { _id, username, phoneNumber, img, role, status } = action.payload;
            state._id = _id;
            state.username =  username;
            state.phoneNumber = phoneNumber;
            state.img = img;
            state.role = role;
            state.status = status;
            state.isAuth = true;
        },

        removeUser : (state) => {
            state._id = "";
            state.username = ""
            state.phoneNumber = ""
            state.img = "";
            state.role = "";
            state.status = "";
            state.isAuth = false;
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer