require("@nomiclabs/hardhat-waffle");
//Ignore:
//require('dotenv').config(); //my extra: delete .secret from artifacts -- don't pushup beforehand
//require('hardhat-artifactor');
//require("@nomiclabs/hardhat-ethers");
//const privateKey = fs.readFileSync((".secret"), {encoding: 'utf8', flag:'r'}); 



//Working:
const fs = require("fs");
const ACCOUNT_KEY = fs.readFileSync(".env").toString()
const projectId = "7356d542f5a14006b1cb5da26f0513bd" 
//create a .env file in root and add: export ACCOUNT_KEY="you private key without 0x at the beginning"
//console.log(process.env) //uncomment to test your .env is working
require('dotenv').config()
// Remember to change to the Network your using in index.js to: const provider = new ethers.providers.JsonRpcProvider("https://ropsten.infura.io/v3/7356d542f5a14006b1cb5da26f0513bd")
module.exports = {
  networks:{
    hardhat:{
      chainId: 3137
    },
    ropsten:{ 
      url: `https://ropsten.infura.io/v3/${projectId}`,
      accounts: [`0x03b6bdd1954d61e909db02dd36f3ca861ff12a9addf89fc2a3d06fe5a5bdad12`] //Known Ropsten private key example. Replace with your own from Metamask
    },
    // mumbai:{
    //   url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
    //   accounts: [`0x${process.env.ACCOUNT_KEY}`]
    // },
    // mainnet:{
    //   url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
    //   accounts: [`0X${process.env.ACCOUNT_KEY}`]
    // }
  },
  solidity: "0.8.4",
};
