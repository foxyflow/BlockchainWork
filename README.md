# BlockchainWork
_An NFT Marketplace to create, and sell NFTs._

If you download this website to deploy with Vercel or your chosen host, you will need to first open it with VScode (or your fav. text editor) to download Nodejs, to install the dependencies/node modules via NPM. This is so the same huge files don't get uploaded to Git all the time.

The .gitignore file shows what you'll be downloading when in VScode ... Afterthat, you will need to change 3 files: the hardhat.config file; .config file; and the index.js line:
  const provider = new ethers.providers.JsonRpcProvider("https://ropsten.infura.io/v3/7356d542f5a14006b1cb5da26f0513bd")
  to your mainnet IPFS host inside (" ") -- currently defaulted to a test net (Ropsten) so people don't play around in Metamask costing real gas-fees.

Install Metamask: From Metamask, you'll need to paste your private key into the .env file (delete the testnet one).
Get some test ETH from Googling: faucet ropsten (paste your public key account number).

In the terminal run: npx hardhat run scripts/deploy.js --network ropsten (change ropsten to which ever network you configured)
Paste in the hashkey given to inside the " " in the .config file

Open a second terminal and run: npm run dev
control click on localhost:3000

After tweaking the frontend to your liking and testing it -- making sure you created a block via Etherscan for example (Metamask will let you know via a modal anyway),
change the config to Mainnet (uncomment) in hardhat.config and you're ready to upload your work of art to the world :) via deploying to Vercel for a URL address for example.

Enjoy the journey :)

[The default value for your NFT is set to 0.001 ETH so people don't accidentally lose a fortune -- change to your liking.]


Concise instructions and reference found here:
https://dev.to/edge-and-node/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb

