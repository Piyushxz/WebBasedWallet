import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isWalletSelected:false,
    chainType:null,
    isWalletGenerated:false
}


export const walletSlice = createSlice({
    name:'wallet',
    initialState,
    reducers:{
        handlewalletSelected:(state,action)=>{
            state.isWalletSelected=true;
            state.chainType=action.payload
        },
        handleIsWalletGenerated:(state,action)=>{
            state.isWalletGenerated = true;
        }
    }
})


export const {handlewalletSelected,handleIsWalletGenerated} = walletSlice.actions
export default walletSlice.reducer