import React from 'react'
import CriptoList from './components/criptoList'

export default function App() {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-3xl font-bold text-center mb-6">💹 Live Crypto Tracker</h1>

        <CriptoList />
      </div>
    </div>
  )
}
