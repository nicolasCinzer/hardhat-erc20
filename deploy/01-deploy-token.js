const { network, getNamedAccounts, deployments } = require("hardhat");
const {
  developmentChains,
  INITIAL_SUPPLY,
} = require("../helper-hardhat-config.js");
const { verify } = require("../utils/verify.js");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const args = [INITIAL_SUPPLY.toString()];
  console.log(args);

  const tokenCNZ = await deploy("CNZToken", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  log(`CNZToken deployed at ${tokenCNZ.address}`);

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(tokenCNZ.address, [INITIAL_SUPPLY.toString()]);
  }
};

module.exports.tags = ["all", "token"];
