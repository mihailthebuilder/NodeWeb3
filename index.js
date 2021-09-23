require('dotenv').config();
const { ethers } = require("ethers");

const url = "https://rinkeby.infura.io/v3/";
const infuraKey = process.env.INFURA_KEY;

const provider = new ethers.providers.JsonRpcProvider(url+infuraKey);

const signer = provider.getSigner();

console.log(provider,signer);