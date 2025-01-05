import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import DownArrow from "./ui/DownIcon";
import { generateMnemonic ,mnemonicToSeed} from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"
import { Button } from "./ui/Button";

interface KeyProps{
    privateKey:any,
    publicKey:any,
    index:any
}

export const WalletGenerator = () => {
    const [mnemonic, setMnemonic] = useState<string[]>([]);

    const [showMnemonic,setShowMnemonic] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [Keys, setKeys] = useState<KeyProps[]>([{index:currentIndex,publicKey:"faf",privateKey:"edf"}]);


    //@ts-ignore
    const state = useSelector(state=>state.chainType)
    console.log(state)


    const generateSolanaPair = ()=>{
        const seed = mnemonicToSeed(mnemonic.join(" "));
        const path = `m/44'/501'/${currentIndex}'/0'`;
        const derivedSeed = derivePath(path, seed.toString()).key;
        const {secretKey} = nacl.sign.keyPair.fromSeed(derivedSeed);
        const publicKey = Keypair.fromSecretKey(secretKey).publicKey.toBase58();
        setCurrentIndex(currentIndex + 1);
        setKeys([...Keys,{index:currentIndex,publicKey: publicKey,privateKey:secretKey}])
    }
    useEffect(() => {
        let mn = generateMnemonic();

        if (Array.isArray(mn)) {
            mn = mn[0];
        }

        setMnemonic(mn.split(" ")); 
        generateSolanaPair()
    }, []);

    console.log(Keys)
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
            className="flex justify-center   bg-black"
        >
            <div className="w-[80vw]   rounded-lg">
                <div className="flex flex-col gap-4">
                    <div className="border border-white border-opacity-30 w-full flex flex-col p-4 min-h-20">
                        <div className="flex justify-between items-center">
                        <div className="tracking-tighter text-2xl md:text-4xl font-black text-white flex items-center">
                            Secret Phrase
                        </div>
                        <div onClick={()=>setShowMnemonic(val=>!val)}
                         className="flex justify-between items-center p-2 hover:bg-[#191919] rounded-lg ease-in-out cursor-pointer">
                            <DownArrow />
                        </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                        {showMnemonic &&
                            mnemonic.map((phrase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                duration: 0.2,
                                
                                ease: "easeInOut",
                                }}
                                className="bg-[#2d2d2d] hover:bg-opacity-70 ease-in-out transition-all text-white text-xl font-medium p-2 rounded-md"
                            >
                                {phrase}
                            </motion.div>
                            ))}
                        </div>

                        </div>
                    </div>

                    <div className="w-full  mt-8">
                        <div className="flex justify-between">
                        <h1 className="tracking-tighter text-3xl md:text-5xl font-black text-white font-black">
                        {
                        //@ts-ignore
                        `Your ${state} Wallet,` 
                        }
                        </h1>
                        <Button text="Add Wallet" variant="primary" size="sm" onClick={()=>{}}/>

                        </div>


                    </div>
                    <div className="border border-white border-opacity-30 w-full flex flex-col mt-8 h-60">
                        <div className="flex justify-between p-4 flex ">
                            <h1 className="tracking-tighter text-2xl md:text-4xl font-black text-white">Wallet {currentIndex}</h1>
                        </div>
                        <div className="flex flex-col w-full bg-[#191919] h-[100vh]">
                            <div className="p-2 flex flex-col">
                                <h1 className="tracking-tighter text-lg md:text-xl font-black text-white">Public Key</h1>
                                <h1 className="tracking-tighter text-md md:text-lg font-black text-white opacity-40 hover:opacity-100 cursor-pointer">Public Key</h1>

                            </div>
                            <div className="p-2 flex flex-col">
                                <h1 className="tracking-tighter text-lg md:text-xl font-black text-white">Private Key</h1>
                                <h1 className="tracking-tighter text-md md:text-lg font-black text-white opacity-40 hover:opacity-100 cursor-pointer">Public Key</h1>

                            </div>
                        </div>
                    </div>
                </div>


            </motion.div>
    );
};
