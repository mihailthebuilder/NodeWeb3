require('dotenv').config();
const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');

const InfuraUrl = "https://rinkeby.infura.io/v3/";
const InfuraKey = process.env.INFURA_KEY;
const PrivateKey = process.env.PRIVATE_KEY;
const MyContract = require("./contract.json");

inputAddress = "0x04d5Bc320FFa275E77BA576B608798418e83B360";

//Easy way (Web3 + @truffle/hdwallet-provider)
const init3 = async () => {
    const provider = new Provider(PrivateKey, InfuraUrl + InfuraKey); 
    const web3 = new Web3(provider);
    const myContract = new web3.eth.Contract(
      MyContract.abi,
      MyContract.address
    );

    const balance = await myContract.methods.getBalance().call();

    console.log(balance);

    /*
    console.log(`Old data value: ${await myContract.methods.data().call()}`);
    const receipt = await myContract.methods.setData(3).send({ from: address });
    console.log(`Transaction hash: ${receipt.transactionHash}`);
    console.log(`New data value: ${await myContract.methods.data().call()}`);
    */
}
  
init3();