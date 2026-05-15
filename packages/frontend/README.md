# Frontend — stellar-manga-access

Next.js 14 frontend for Stellar Manga Access.

Features:
- Wallet integration (Stellar/Freighter)
- Manga reader UI
- Micro-payment checkout flow
- Supabase client for metadata and user state

Local development:
1. Install workspace dependencies: `pnpm install`
2. Start frontend: `pnpm --filter @stellar-manga-access/frontend dev`

Environment variables
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- NEXT_PUBLIC_STELLAR_NETWORK ("TESTNET" or "PUBLIC")
- NEXT_PUBLIC_STELLAR_HORIZON_URL


