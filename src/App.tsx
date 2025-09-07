import './App.css'

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { Airdrop } from './components/airdrop';

import '@solana/wallet-adapter-react-ui/styles.css'
function App() {

  return (<ConnectionProvider endpoint={"https://api.devnet.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                <WalletMultiButton/>
                  <WalletDisconnectButton/>
                  <Airdrop/>
                </WalletModalProvider>
                </WalletProvider>
                </ConnectionProvider>
  )
}

export default App
