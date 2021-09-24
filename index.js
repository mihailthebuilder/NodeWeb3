require('dotenv').config();
const { ethers } = require("ethers");

async function showBalance(provider, address) {
    balanceObj = await provider.getBalance(address);
    balanceNum = ethers.utils.formatEther(balanceObj);
    console.log("Balance of user is " + balanceNum);
}

function getContract(provider) {
    const address = "0x7614A103007DE7A9157FAD6ab73361AF2AdeAb64";

    const abi = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "int256",
                    "name": "amt",
                    "type": "int256"
                }
            ],
            "name": "deposit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBalance",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "int256",
                    "name": "amt",
                    "type": "int256"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
    
    return new ethers.Contract(address, abi, provider)
}

async function showContractBalance(contract) {
    balance = await contract.getBalance();
    console.log("Contract balance is " + ethers.utils.formatEther(balance));
}

async function deposit(contract) {

    const signedContract = await contract.connect(signer);

    await signedContract.deposit(5000);

    //showContractBalance(signedContract);
}

const url = "https://rinkeby.infura.io/v3/";
const infuraKey = process.env.INFURA_KEY;

const provider = new ethers.providers.JsonRpcProvider(url+infuraKey);

//const signer = provider.getSigner();

inputAddress = "0x04d5Bc320FFa275E77BA576B608798418e83B360";

showBalance(provider,inputAddress);

const contract = getContract(provider);


async function getBalance(provider,signer) {
    console.log(signer.address);
    balance = await provider.send('relay_getBalance', [signer.address])
    console.log(`Your current ITX balance is ${balance}`)
}

showContractBalance(contract);

const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
getBalance(provider,signer)