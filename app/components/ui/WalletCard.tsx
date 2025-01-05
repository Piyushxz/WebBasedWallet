interface cardProps{
    index:string | number,
    privateKey:string,
    publicKey:string
}

export const WalletCard = (props:cardProps)=>{
    return(
        
        <div className="border border-white border-opacity-30 w-full flex flex-col mt-8 h-60">
            <div className="flex justify-between p-4 flex ">
                    <h1 className="tracking-tighter text-2xl md:text-4xl font-black text-white">Wallet {props.index}</h1>
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
        
    )
}