import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useRef } from "react"

export function Airdrop(){
    const amountRef = useRef<HTMLInputElement>(null) 
    const amount = amountRef.current 
    
    const {connection} = useConnection()
    const wallet = useWallet()
    function requestAirdrop(){
        if(!wallet.publicKey){return}
        connection.requestAirdrop(wallet.publicKey,Number(amount))
    }
    return <div>
        <input type="text" placeholder="airdrop" ref={amountRef}/>
        <button onClick={requestAirdrop}>airdrop</button> 
        <h1>
            hey : {wallet.publicKey?.toString()}
        </h1>
    </div>
}