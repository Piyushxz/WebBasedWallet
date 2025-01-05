"use client";
import {motion } from "motion/react"
import { useEffect, useState } from "react"
import { Button } from "./ui/Button";

export const Wallet =()=>{
    const [pageLoaded,setPageLoaded]= useState(false)
    useEffect(()=>{
        setPageLoaded(true)

        return()=>{setPageLoaded(false)}
    },[])
    return(
        <div className="w-[100vw] flex justify-center mt-20">
            {
                pageLoaded &&
                <motion.div initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}>
                <div className="w-[80vw]">
                        <div className="flex flex-col gap-4">
                            <h1 className="tracking-tighter text-4xl md:text-6xl font-black text-white">xvWallo is a Web Based Wallet.</h1>

                            <h1 className="tracking-tighter text-xl md:text-2xl font-black text-white ">Create a wallet for Etherium or Solana Blockchain,</h1>
                        </div>

                        <div className="flex gap-2 mt-4">
                            <Button text="Etherium" variant="primary" size="md"/>
                            <Button text="Solana" variant="primary" size="md"/>

                        </div>
                </div>
                </motion.div>
            }

        </div>

    )
}