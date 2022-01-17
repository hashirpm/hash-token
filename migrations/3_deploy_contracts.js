const HashToken = artifacts.require("HashToken");
const HashTokenSale = artifacts.require("HashTokenSale");

module.exports = function (deployer) {

    var tokenPrice = 1000000000000000;
    deployer.deploy(HashTokenSale, HashToken.address, tokenPrice);


};