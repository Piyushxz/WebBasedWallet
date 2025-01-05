import { useState,useEffect } from "react"
import {motion} from "motion/react"
import DownArrow from "./ui/DownIcon"
export const WalletGenerator= ()=>{

    const [isMounted,setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)

        return()=>setIsMounted(false)
    },[])

    return(
        
            isMounted &&
            (
                <motion.div initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}>
                    <div className="w-[80vw] ">
                        <div className="flex flex-col gap-4">
                            <div className="border border-white border-opacity-30 w-full flex justify-between">
                                <div className="tracking-tighter text-2xl md:text-4xl font-black text-white m-4">Secret Phrase</div>
                                <div className="m-5  hover:bg-[#191919] ease-in-out rounded-lg"><DownArrow size={35}/></div>

                            </div>
                        </div>
                    </div>
                </motion.div>
            )


        

        
    )
}