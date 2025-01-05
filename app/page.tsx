import { Navbar } from "./components/Navbar";
import { Wallet } from "./components/Wallet";
export default function Home() {
  return (
    <div className=" bg-black h-screen  w-screen flex flex-col">
    <Navbar/>
    <Wallet/>
    </div>
  );
}
