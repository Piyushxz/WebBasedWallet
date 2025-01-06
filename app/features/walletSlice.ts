import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WalletState {
  isWalletSelected: boolean;
  chainType: string | null; 
  isWalletGenerated: boolean;
}

const initialState: WalletState = {
  isWalletSelected: false,
  chainType: null,
  isWalletGenerated: false,
};

// Create the slice
export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    handlewalletSelected: (state, action: PayloadAction<string | null>) => {
      state.isWalletSelected = true;
      state.chainType = action.payload;
    },
    handleIsWalletGenerated: (state) => {
      state.isWalletGenerated = true;
    },
  },
});

export const { handlewalletSelected, handleIsWalletGenerated } = walletSlice.actions;
export default walletSlice.reducer;
