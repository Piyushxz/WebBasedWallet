import { useDispatch ,useSelector} from "react-redux"
import { Button } from "./ui/Button"
import {handleIsWalletGenerated} from "../features/walletSlice"
import { useEffect, useState } from "react"
import {motion} from "motion/react"
import { WalletGenerator } from "./WalletGenerator"

export const EtheriumWallet = ()=>{
    const [isMounted,setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)

        return()=>setIsMounted(false)
    },[])

    const dispatch = useDispatch()
    //@ts-ignore
    const isWalletGenerated = useSelector(state=>state.isWalletGenerated)
    return(
        <>
        {
            isWalletGenerated ?
                <div className="h-screen w-screen">                 
                    <WalletGenerator/>
                </div>

           
            :
            
                isMounted &&
                
                <motion.div  initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}>
                <div className="w-[80vw] ">
                <div className="flex flex-col gap-4">
                     <h1 className="tracking-tighter text-4xl md:text-6xl font-black text-white">Secret Recovery Phrase</h1>
                     <h1 className="tracking-tighter text-xl md:text-2xl font-black text-white">This phrase is the ONLY to recover your wallet.Do NOT share it with Anyone!</h1>
    
                 </div>
                 <div className="flex  mt-8">
                    <Button text="Generate Wallet" variant='primary' size="lg" onClick={()=>{dispatch(handleIsWalletGenerated(""))}}/>
                 </div>
                </div>
                </motion.div>
                
            
        }

        </>


    )
}