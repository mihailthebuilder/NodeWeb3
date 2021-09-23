require('dotenv').config();
const { ethers } = require("ethers");

async function showBalance(provider, address) {
    balanceObj = await provider.getBalance(address);
    balanceNum = ethers.utils.formatEther(balanceObj);
    console.log(balanceNum);
}

const url = "https://rinkeby.infura.io/v3/";
const infuraKey = process.env.INFURA_KEY;

const provider = new ethers.providers.JsonRpcProvider(url+infuraKey);

const signer = provider.getSigner();

address = "0x04d5Bc320FFa275E77BA576B608798418e83B360";

showBalance(provider,address);