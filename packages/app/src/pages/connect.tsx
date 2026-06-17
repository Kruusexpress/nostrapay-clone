import { useState } from 'react';
import { useWallet } from '../context/WalletContext';
import WalletConnectForm from '../components/WalletConnectForm';

export default function Connect() {
  const { connected } = useWallet();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">⚡ NostraPay</h1>
          <p className="text-gray-600 text-center mb-8">Connect your Lightning wallet</p>
          
          {connected ? (
            <div className="text-center text-green-600">
              <p className="mb-4">✅ Wallet connected!</p>
              <a href="/dashboard" className="text-blue-600 underline">Go to Dashboard</a>
            </div>
          ) : (
            <WalletConnectForm />
          )}
        </div>
      </div>
    </div>
  );
}
