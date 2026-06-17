import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useWallet } from '../context/WalletContext';
import Dashboard from '../components/Dashboard';

export default function DashboardPage() {
  const router = useRouter();
  const { connected } = useWallet();

  useEffect(() => {
    if (!connected) {
      router.push('/connect');
    }
  }, [connected, router]);

  if (!connected) {
    return <div>Loading...</div>;
  }

  return <Dashboard />;
}
