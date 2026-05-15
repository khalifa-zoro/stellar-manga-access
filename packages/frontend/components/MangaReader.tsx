'use client'

import { useState } from 'react'

export default function MangaReader() {
  const [unlocked, setUnlocked] = useState(false)

  return (
    <div className="mt-4 border rounded p-4 bg-white">
      <h3 className="text-lg font-semibold">Sample Manga Title</h3>
      {!unlocked ? (
        <div className="mt-4">
          <p className="text-sm text-gray-600">Preview pages are shown. Unlock full manga to read all chapters.</p>
          <div className="mt-4">
            {/* Payment checkout component to trigger micro-payment */}
            <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={() => alert('Open payment flow')}>
              Unlock for $0.50 (or equivalent)
            </button>
          </div>
        </div>
      ) : (
        <div className="prose">
          <p>Full manga content goes here. Use a proper reader and pagination.</p>
        </div>
      )}
    </div>
  )
}
