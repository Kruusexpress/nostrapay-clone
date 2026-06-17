import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useWallet } from '../context/WalletContext';
import CashoutFlow from '../components/CashoutFlow';

export default function CashoutPage() {
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

  return <CashoutFlow />;
}
