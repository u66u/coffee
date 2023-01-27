# Crypto Coffee ☕️

Create your own page where people can send you coffee money with crypto.
### Setup

```bash
git clone https://github.com/technicca/coffee
cd coffee
yarn
```
### Deploy contract
Copy `.env.example` to `.env` and fill in the values in both packages/hardhat and packages/next-app.
Then run:
```bash
npx hardhat run scripts/deploy.js --network mumbai
```

### Run app
```bash
cd packages/next-app
yarn dev
```