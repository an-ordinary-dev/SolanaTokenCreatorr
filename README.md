# 🚀 Metaplex Next.js Solana Token Creator

A modern web application for **creating and managing Solana tokens** using **Metaplex, Next.js, TailwindCSS, and Zustand**.

---

## 📌 Features

- ✅ **Create Fungible Tokens** – Generate custom Solana tokens with unique metadata.
- ✅ **Decentralized Storage** – Upload token images securely.
- ✅ **Customizable Tokenomics** – Set supply, decimals, and other properties.
- ✅ **Seamless Wallet Integration** – Connect using Solana Wallet Adapter.
- ✅ **Modern UI/UX** – Built with **Next.js & TailwindCSS**, with **dark/light mode** support.
- ✅ **State Management** – Uses **Zustand** for efficient global state management.
- ✅ **Metaplex Umi Integration** – Leverages Metaplex's Umi framework for streamlined blockchain operations.

---

## 🛠️ Tech Stack

|-------------|---------|
| **Next.js** | React framework for server-side rendering & static generation |
| **TailwindCSS** | Rapid UI styling with utility-first CSS |
| **Solana Wallet Adapter** | Wallet authentication & connection handling |
| **Metaplex Umi** | Lightweight SDK for interacting with the Solana blockchain |
| **Zustand** | Global state management |
| **TypeScript** | Static typing for reliability and scalability |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone <your-repository-url>
cd SolanaTokenCreatorr
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory with the following:

```ini
# Solana RPC URL (Default: Devnet)
NEXT_PUBLIC_RPC_URL=https://api.devnet.solana.com

# Wallet Address for Minting Fees
NEXT_PUBLIC_FEE_ADDRESS=your_wallet_address_here

# Fee Amount (in SOL)
NEXT_PUBLIC_FEE_AMOUNT=0.005
```

### 4️⃣ Start the Development Server

```bash
npm run dev
# or
yarn dev
```

Now, open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🔑 Environment Variables Explained

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_RPC_URL` | Solana RPC URL for blockchain interactions (Devnet/Mainnet) |
| `NEXT_PUBLIC_FEE_ADDRESS` | Wallet address where minting fees are sent |
| `NEXT_PUBLIC_FEE_AMOUNT` | Minting fee in SOL (default: **0.005 SOL**) |

**⚠️ Important:**  
- Replace `NEXT_PUBLIC_FEE_ADDRESS` with your actual Solana wallet address.
- If deploying on **Mainnet**, update `NEXT_PUBLIC_RPC_URL` accordingly.
- Ensure your wallet has **enough SOL** for transaction fees.

---

## 🔧 Configuration Guide

### 🔄 Changing RPC URL

You can modify the RPC URL via:
1. **`.env.local` (Recommended)**
2. **`constants.ts`**
3. **Hardcoded in `umiStore` (Not recommended)**

Example (in `src/store/useUmiStore.ts` at line `21`):

```ts
const useUmiStore = create<UmiState>()((set) => ({
  // Add your own RPC here
  umi: createUmi('https://api.devnet.solana.com').use(
    signerIdentity(
      createNoopSigner(publicKey('11111111111111111111111111111111'))
    )
  ),
  signer: undefined,
  updateSigner: (signer) => {
    console.log('updateSigner')
    set(() => ({ signer: createSignerFromWalletAdapter(signer) }))
  },
}))
```

---

## 🔥 Why Zustand?

**Zustand** is used for **state management**, allowing us to store and manage the **Umi instance globally**.  

Advantages:
- **Access state anywhere** in `.ts` or `.tsx` files.
- **Automatic signer updates** when wallet adapter changes.
- **Lightweight & efficient** compared to Redux.

### ✅ Example: Accessing Umi Instance in `.tsx`

```ts
const umi = useUmiStore().umi
const signer = useUmiStore().signer

umi.use(signerIdentity(signer))
```

### ✅ Example: Accessing Umi Instance in `.ts`

```ts
const umi = useUmiStore.getState().umi
const signer = useUmiStore.getState().signer

umi.use(signerIdentity(signer))
```

---

## 🛠️ Utility Functions

The `/lib/umi` folder contains **helper functions** for managing blockchain interactions.

### 📌 Sending Transactions: `sendAndConfirmWithWalletAdapter()`

This function:
- **Sends transactions** with the latest wallet adapter state.
- **Confirms transactions** with a specified commitment level.
- **Handles priority fees**.

Example:

```ts
// import useUmiStore from '@/store/useUmiStore'
// import { setComputeUnitPrice } from '@metaplex-foundation/mpl-toolbox'
// import { TransactionBuilder, signerIdentity } from '@metaplex-foundation/umi'
// import { base58 } from '@metaplex-foundation/umi/serializers'

// const sendAndConfirmWalletAdapter = async (tx: TransactionBuilder) => {
//   const umi = useUmiStore.getState().umi
//   const signer = useUmiStore.getState().signer
//   umi.use(signerIdentity(signer!))

//   const blockhash = await umi.rpc.getLatestBlockhash()
//   const transactions = tx.add(setComputeUnitPrice(umi, { microLamports: BigInt(100000) }))
//   const signedTx = await transactions.buildAndSign(umi)

//   const signature = await umi.rpc.sendTransaction(signedTx)
//   const confirmation = await umi.rpc.confirmTransaction(signature, { strategy: { type: 'blockhash', ...blockhash } })

//   return { signature: base58.deserialize(signature), confirmation }
// }

// export default sendAndConfirmWalletAdapter
```

---

## 📦 Deployment

### 🛠️ Deploy to Vercel

This project is optimized for deployment on **Vercel**.

1. Push your code to **GitHub**.
2. Connect your repository to **Vercel**.
3. Add environment variables on Vercel.
4. Click **Deploy**.

### 🔹 Alternative: Self-Hosting

If deploying on your own server:

```bash
npm run build
npm start
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.