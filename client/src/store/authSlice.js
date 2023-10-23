import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: JSON.parse(localStorage.getItem("user")),
	auth: JSON.parse(localStorage.getItem("user")) ? true : false,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			localStorage.setItem("user", JSON.stringify(state.user));
		},
		deleteUser: (state, action) => {
			state.user = null;
			localStorage.clear();
		},
		setAuth: (state, action) => {
			const { auth } = action.payload;
			state.auth = auth;
		},
	},
});

export const { setUser, deleteUser, setAuth } = authSlice.actions;

export default authSlice.reducer;
