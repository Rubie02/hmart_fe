import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";

export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
    try {
        return await authService.register(user);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const initialState = {
    user: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState: "",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
        }).addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
        }).addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error
        })
    }
})

export default authSlice.reducer;