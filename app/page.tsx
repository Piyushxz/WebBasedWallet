"use client";
import { Navbar } from "./components/Navbar";
import { Wallet } from "./components/Wallet";
import { Provider } from "react-redux";
import { store } from "./store/store";
import {Toaster} from "sonner"
export default function Home() {
  return (
    <Provider store={store}>
          <div className=" bg-black h-screen  w-screen flex flex-col">
            <Toaster theme='dark'position="bottom-right"/>
            <Navbar/>
                   
             <Wallet/>
          </div>

    </Provider>
    

  );
}
