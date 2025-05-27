// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { IProduct } from "@/app/utils/Types";
// import { client } from "@/sanity/lib/client";

// // ProductState interface
// interface ProductState {
//   products: IProduct[];
//   status: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;
// }

// // Initial state
// const initialState: ProductState = {
//   products: [],
//   status: "idle",
//   error: null,
// };

// // Fetch products using createAsyncThunk
// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     const query = `*[_type == "food"]{
//       _id,
//       title,
//       slug,
//       category,
//       available,
//       description,
//       toppings,
//       flavors,
//       tags,
//       price,
//       "image": image.asset->url
//     }`;

//     // no cahcing
//     // const products = await client.fetch(query, {}, { cache: "no-store" }); // Disable caching
//     const products = await client.fetch(query);

//     return products.map((item: any) => ({
//       id: item._id,
//       title: item.title,
//       slug: item.slug.current,
//       available: item.available,
//       description: item.description,
//       image: item.image,
//       tags: item.tags,
//       category: item.category,
//       flavors: item.flavors,
//       toppings: item.toppings,
//       price: item.price,
//       discount: item.discount,
//     }));
//   }
// );

// // Slice
// const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         console.log(action.payload); // Log fetched products
//         state.status = "succeeded";
//         state.products = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message || "Failed to fetch products";
//       });
//   },
// });

// export default productSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { IProduct } from "@/app/utils/Types";
// import { client } from "@/sanity/lib/client";

// // ProductState interface
// interface ProductState {
//   products: IProduct[];
//   status: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;
// }

// // Initial state
// const initialState: ProductState = {
//   products: [],
//   status: "idle",
//   error: null,
// };

// // Fetch products from Sanity
// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     const query = `*[_type == "food"]{
//       _id,
//       title,
//       slug,
//       category,
//       available,
//       description,
//       toppings,
//       flavors,
//       tags,
//       price,
//       discount,
//       "image": image.asset->url
//     }`;

//     const products = await client.fetch(query);

//     return products.map((item: any) => ({
//       id: item._id,
//       title: item.title,
//       slug: item.slug.current,
//       available: item.available,
//       description: item.description,
//       image: item.image,
//       tags: item.tags,
//       category: item.category,
//       flavors: item.flavors,
//       toppings: item.toppings,
//       price: item.price,
//       discount: item.discount,
//     }));
//   }
// );

// // Subscribe to changes in Sanity
// export const subscribeToProducts = (dispatch: any) => {
//   const subscription = client.listen(`*[_type == "food"]`).subscribe((update) => {
//     console.log("🔄 Sanity Data Updated:", update);
//     dispatch(fetchProducts()); // Fetch updated products when data changes
//   });

//   return () => subscription.unsubscribe(); // Cleanup function
// };

// // Create Slice
// const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         console.log("✅ Products Updated:", action.payload);
//         state.status = "succeeded";
//         state.products = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message || "Failed to fetch products";
//       });
//   },
// });

// export default productSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@/app/utils/Types";
import { client } from "@/sanity/lib/client";

// ProductState interface
interface ProductState {
  products: IProduct[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Initial state
const initialState: ProductState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const query = `*[_type == "food"]{
      _id,
      title,
      slug,
      category,
      mealoftheday,
      chef,
      available,
      description,
      toppings,
      flavors,
      tags,
      price,
      discount,
      "image": image.asset->url
    }`;

    // Disable caching to ensure fresh data
    const products = await client.fetch(query, {}, { cache: "no-cache" });

    return products.map((item:  any) => ({
      id: item._id,
      title: item.title,
      slug: item.slug.current,
      available: item.available,
      description: item.description,
      image: item.image,
      tags: item.tags,
      category: item.category,
      mealoftheday: item.mealoftheday, // ✅ Ensure it's always a string
      chef: item.chef ,
      flavors: item.flavors,
      toppings: item.toppings,
      price: item.price,
      discount: item.discount,
    }));
  }
);

// Subscribe to changes in Sanity
export const subscribeToProducts = (dispatch: any) => {
  console.log("Setting up subscription...");

  const query = `*[_type == "food"]`;

  const subscription = client.listen(query).subscribe({
    next: (update) => {
      console.log("🔔 API Data Changed:", update);

      // Only fetch new data when relevant changes happen
      if (update.transition === "update" || update.transition === "appear") {
        dispatch(fetchProducts()); // Fetch updated data
      }
    },
    error: (error) => {
      console.error("❌ Subscription Error:", error);
    },
    complete: () => {
      console.log("✅ Subscription Completed");
    },
  });
  return () => {
    subscription.unsubscribe();
    console.log("❌ Unsubscribed from API updates");
  };
};

// Create Slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log("✅ Products Updated:", action.payload);
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export default productSlice.reducer;
