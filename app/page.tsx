"use client";
import { Navbar } from "./components/Navbar";
import { Wallet } from "./components/Wallet";
import { Provider } from "react-redux";
import { store } from "./store/store";
export default function Home() {
  return (
    <Provider store={store}>
          <div className=" bg-black h-screen  w-screen flex flex-col">
            <Navbar/>
            <Wallet/>
          </div>
    </Provider>

  );
}
