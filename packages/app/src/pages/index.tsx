import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useWallet } from '../context/WalletContext';

export default function Home() {
  const router = useRouter();
  const { connected } = useWallet();

  useEffect(() => {
    if (connected) {
      router.push('/dashboard');
    } else {
      router.push('/connect');
    }
  }, [connected, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">⚡ NostraPay</h1>
        <p className="text-gray-600">Lightning Payment App</p>
        <div className="mt-8 animate-pulse">Loading...</div>
      </div>
    </div>
  );
}
