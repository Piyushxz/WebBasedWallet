import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isWalletSelected:false,
    chainType:null
}


export const walletSlice = createSlice({
    name:'wallet',
    initialState,
    reducers:{
        handlewalletSelected:(state,action)=>{
            state.isWalletSelected=true;
            state.chainType=action.payload
        }
    }
})


export const {handlewalletSelected} = walletSlice.actions
export default walletSlice.reducer