import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from 'react-toastify'
import { productService } from "./productService";

export const getProducts = createAsyncThunk(
    "product/get-products",
    async (thunkAPI) => {
        try {
            return await productService.getProducts;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const productState = {
    product: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const productSlice = createSlice({
    name: "products",
    initialState: productState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.product = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = false;
                state.message = action.error;
            });
    }
});

export default productSlice.reducer;