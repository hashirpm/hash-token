const HashToken = artifacts.require("HashToken");

module.exports = function (deployer) {
    deployer.deploy(HashToken, 1000000);

};
