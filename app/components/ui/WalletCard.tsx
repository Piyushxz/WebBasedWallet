import VisibleIcon from "./visibleIcon"
import NotVisibleIcon from "./NotVisibleIcon"
import { useState } from "react"
import { DeleteIcon } from "./DeleteIcon";
import {toast} from "sonner"
interface cardProps{
    index:string | number,
    privateKey:string,
    publicKey:string,
    handleDeletePair:any
    
}

export const WalletCard = (props: cardProps) => {
    const [isPrivateKeyVisible, setIsPrivateKeyVisible] = useState(false);
    return (
        <div className="border border-white border-opacity-30 w-full flex flex-col mt-8 h-60">
            <div className="flex justify-between p-4 flex">
                <h1 className="tracking-tighter text-2xl md:text-4xl font-black text-white">Wallet {props.index}</h1>
                <div onClick={props.handleDeletePair}
                className="p-2 hover:bg-[#191919] rounded-lg">
                    <DeleteIcon/>
                </div>
            </div>
            <div className="flex flex-col w-full bg-[#191919] h-[100vh]">
                <div className="p-2 flex flex-col">
                    <h1 className="tracking-tighter text-lg md:text-xl font-black text-white">Public Key</h1>
                    <h1 onClick={()=>{toast.success("Public Key Copied to Clipboard");
                        navigator.clipboard.writeText(props.publicKey)
                    }}
                        className="tracking-tighter text-md md:text-lg font-black text-white opacity-40 hover:opacity-100 cursor-pointer truncate overflow-hidden"
                        style={{ whiteSpace: "nowrap", maxWidth: "100%" }}
                        title={props.publicKey} 
                    >
                        {props.publicKey}
                    </h1>
                </div>
                <div className="p-2 flex flex-col">
                    <h1 className="tracking-tighter text-lg md:text-xl font-black text-white">Private Key</h1>
                    <div className="flex justify-between">
                        <h1  onClick={()=>{toast.success("Private Key Copied to Clipboard");
                        navigator.clipboard.writeText(props.privateKey)
                    }}
                            className="tracking-tighter text-md md:text-lg font-black text-white opacity-40 hover:opacity-100 cursor-pointer truncate overflow-hidden"
                            style={{ whiteSpace: "nowrap", maxWidth: "100%" }}
                            title={isPrivateKeyVisible ? props.privateKey : "********"} // Tooltip for private key
                        >
                            {isPrivateKeyVisible ? props.privateKey : "********"}
                        </h1>
                        <div
                            className="hover:bg-black p-2 ease-in-out transition-all ml-2"
                            onClick={() => setIsPrivateKeyVisible((val) => !val)}
                        >
                            {isPrivateKeyVisible ? <VisibleIcon /> : <NotVisibleIcon />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
