import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  initialState: {
    screenWidth: window.innerWidth,
    scrollY: window.scrollY,
    isOpen: false,
    activeLink: 'home',
  },
  name: "navbar",
  reducers: {
    updateWidth: (state, action) => {
      state.screenWidth = action.payload;
    },
    updateY: (state, action) => {
      state.scrollY = action.payload;
    },
    toggleSidebar: (state, action) => {
      state.isOpen = action.payload;
    },
    setActiveLink: (state, action) => {
      state.activeLink = action.payload;
    },
  },
});

export const { updateY, updateWidth, toggleSidebar, setActiveLink } =
  navSlice.actions;
export default navSlice.reducer;
