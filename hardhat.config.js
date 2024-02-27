require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: process.env.SE_POLIA_RPC_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
  },
};
