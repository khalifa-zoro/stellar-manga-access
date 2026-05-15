'use client'

import { useState } from 'react'

export default function WalletConnect() {
  const [account, setAccount] = useState(null)

  const connect = async () => {
    // Placeholder: integrate Freighter or other Stellar wallet here
    // Example: window.freighterApi.connect()
    alert('Connect wallet: integrate Freighter or Soroban wallet here')
  }

  return (
    <div>
      {account ? (
        <div className="flex items-center space-x-2">
          <span className="font-mono">{account}</span>
        </div>
      ) : (
        <button onClick={connect} className="px-4 py-2 bg-blue-600 text-white rounded">
          Connect Wallet
        </button>
      )}
    </div>
  )
}
