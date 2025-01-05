import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DownArrow from "./ui/DownIcon";
import { generateMnemonic } from "bip39";

export const WalletGenerator = () => {
    const [mnemonic, setMnemonic] = useState<string[]>([]);

    const [showMnemonic,setShowMnemonic] = useState(false)

    useEffect(() => {
        let mn = generateMnemonic();

        if (Array.isArray(mn)) {
            mn = mn[0];
        }

        setMnemonic(mn.split(" ")); 
    }, []);

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
                        <div className="tracking-tighter text-2xl md:text-4xl font-black text-white  items-center">
                            Secret Phrase
                        </div>
                        <div onClick={()=>setShowMnemonic(val=>!val)}
                         className="flex justify-between items-center px-1 hover:bg-[#191919] rounded-lg ease-in-out cursor-pointer">
                            <DownArrow size={35}/>
                        </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                        {showMnemonic &&
                            mnemonic.map((phrase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                duration: 0.2,
                                
                                ease: "easeInOut",
                                }}
                                className="bg-[#2d2d2d] text-white text-xl font-medium p-2 rounded-md"
                            >
                                {phrase}
                            </motion.div>
                            ))}
                        </div>

                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
    );
};
