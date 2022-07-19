// Import du smart contract "voting"
const voting = artifacts.require("./voting.sol");
module.exports = (deployer) => {
    // Deployer le smart contract!
    deployer.deploy(voting);
} 
