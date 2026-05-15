'use client'

import { useState } from 'react'

export default function PaymentCheckout({ amount = 0.5 }) {
  const [loading, setLoading] = useState(false)

  const startPayment = async () => {
    setLoading(true)
    try {
      // TODO: implement Soroban / Stellar micro-payment flow
      // - Create transaction on backend via /api/create-payment
      // - Use wallet to sign & submit
      alert('Start payment: integrate Soroban/Soroban SDK and wallet')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button onClick={startPayment} disabled={loading} className="px-4 py-2 bg-indigo-600 text-white rounded">
      {loading ? 'Processing...' : `Pay $${amount} to Unlock`}
    </button>
  )
}
