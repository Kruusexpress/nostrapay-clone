# NostraPay Clone - Lightning Payment App

A non-custodial Lightning payment application that enables users to:
- Connect NWC-compatible wallets (Alby, Mutiny) via NIP-47
- View live BTC balances in sats and USD
- Cash out to bank accounts (Stripe Connect) or USDC on Ethereum, Base, or Solana
- Track transaction history

## ⚡ Features

- **🔐 Non-Custodial**: No private keys stored on servers
- **⚡ Lightning Integration**: NIP-47 (NWC) wallet connections
- **💰 Live Pricing**: Real-time BTC/USD conversion
- **🔄 Multi-Chain Cashout**: Ethereum, Base, Solana USDC + bank transfers
- **📊 Dashboard**: Real-time balance and transaction history
- **🎯 Privacy-First**: Minimal data collection

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Yarn or npm
- Alby or Mutiny wallet (for testing)

### Installation

```bash
git clone https://github.com/Kruusexpress/nostrapay-clone.git
cd nostrapay-clone
npm install
npm run dev
```

This starts:
- Frontend on `http://localhost:3000`
- Backend API on `http://localhost:3001`

### Environment Setup

Create `.env.local`:

```env
NODE_ENV=development
PORT=3001

STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...

ETHEREUM_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY
BASE_RPC_URL=https://base-mainnet.g.alchemy.com/v2/YOUR_KEY
SOLANA_RPC_URL=https://api.mainnet-beta.solana.com

COINGECKO_API_KEY=your_key_here

NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 📁 Project Structure

```
packages/
├── app/                  # Next.js frontend (React 18, TailwindCSS)
│   ├── src/pages/       # Pages: connect, dashboard, cashout, history
│   ├── src/components/  # UI components
│   ├── src/context/     # Wallet context & state
│   └── src/hooks/       # Custom hooks
│
└── backend/             # Node.js + Express API
    ├── src/routes/      # API endpoints
    ├── src/services/    # Business logic (NWC, Pricing, Stripe, Chains)
    └── src/utils/       # Validation & crypto utilities
```

## 🔗 API Endpoints

### NIP-47 / NWC
- `POST /api/nwc/connect` - Register NWC connection
- `POST /api/nwc/disconnect` - Disconnect wallet
- `GET /api/nwc/balance` - Get wallet balance

### Pricing
- `GET /api/pricing/btc-usd` - Get current BTC/USD price
- `GET /api/pricing/rates` - Get conversion rates

### Payouts
- `POST /api/payouts/bank` - Initiate bank transfer via Stripe
- `POST /api/payouts/usdc` - Send USDC on-chain
- `GET /api/payouts/status/:id` - Check payout status

### Transactions
- `GET /api/transactions` - Get transaction history
- `GET /api/transactions/:id` - Get transaction details

## 🔐 Security

1. **No Private Key Storage** - All signing happens on client or through wallet extensions
2. **NIP-47 Protocol** - Uses NIP-47 for authenticated requests
3. **HTTPS Only** - All communication encrypted in production
4. **CORS Restrictions** - API locked to trusted domains
5. **Rate Limiting** - 100 requests per 15 minutes

## 🛠️ Tech Stack

### Frontend
- Next.js 14
- React 18
- TypeScript
- TailwindCSS
- Zustand (state)
- Framer Motion (animations)

### Backend
- Node.js
- Express
- TypeScript
- Stripe SDK
- ethers.js
- @solana/web3.js

### Integrations
- **NIP-47** - Lightning wallet protocol
- **Stripe Connect** - Bank payouts
- **Alchemy/RPC** - On-chain transactions
- **CoinGecko** - BTC pricing

## 📚 Documentation

- [Setup Guide](docs/SETUP.md) - Detailed development setup
- [API Reference](docs/API.md) - Complete API documentation

## 🚦 Next Steps

- [ ] Complete NIP-47 Nostr protocol implementation
- [ ] Add database for transaction history
- [ ] Implement Stripe webhook handlers
- [ ] Add on-chain transaction signing
- [ ] Deploy to production
- [ ] Add unit tests
- [ ] Setup CI/CD pipeline

## 📄 License

MIT

---

**Built with ⚡ for Lightning**
