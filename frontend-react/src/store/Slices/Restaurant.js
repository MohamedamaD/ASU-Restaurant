import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBlogs = createAsyncThunk(
  "restaurant/fetchBlogs",
  async function () {
    try {
      const response = await fetch("http://localhost:8080/api/blog");
      const blogs = await response.json();
      return blogs;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  }
);

export const fetchTestimonials = createAsyncThunk(
  "restaurant/fetchTestimonials",
  async function () {
    try {
      const response = await fetch("http://localhost:8080/api/testimonial");
      const testimonials = await response.json();
      return testimonials;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  }
);
export const fetchMenus = createAsyncThunk(
  "restaurant/fetchMenus",
  async function () {
    try {
      const response = await fetch("http://localhost:8080/api/menu");
      const menus = await response.json();
      return menus;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  }
);

export const restaurantSlice = createSlice({
  initialState: { loading: false, blogs: [], testimonials: [], menus: [] },
  name: "restaurant",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload.data;
        state.loading = false;
      })
      .addCase(fetchTestimonials.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.testimonials = action.payload.data;
        state.loading = false;
      })
      .addCase(fetchMenus.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenus.fulfilled, (state, action) => {
        state.menus = action.payload.data;
        state.loading = false;
      });
  },
});

export const {} = restaurantSlice.actions;
export default restaurantSlice.reducer;
