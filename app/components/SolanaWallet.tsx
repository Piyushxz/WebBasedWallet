import { Button } from "./ui/Button"

export const SolanaWallet = ()=>{
    return(
        <div className="w-[80vw] ">
            <div className="flex flex-col gap-4">
                 <h1 className="tracking-tighter text-4xl md:text-6xl font-black text-white">Secret Recovery Phrase</h1>
                 <h1 className="tracking-tighter text-xl md:text-2xl font-black text-white">This phrase is the ONLY to recover your wallet.Do NOT share it with Anyone!</h1>

             </div>
             <div className="flex justify-center mt-8">
                <Button text="Generate Wallet" variant='primary' size="lg" onClick={()=>{}}/>
             </div>
        </div>
    )
}