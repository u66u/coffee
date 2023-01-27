import React from 'react'
import Withdraw from './components/Withdraw'
import { ConnectButton } from "@rainbow-me/rainbowkit";

function withdraw() {
  return (
    <div>
        <ConnectButton />
        <Withdraw />
        
    </div>
  )
}

export default withdraw