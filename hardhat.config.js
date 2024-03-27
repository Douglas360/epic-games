require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      accounts: [
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      ],
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/eW-tnP4AAByG93fex0dqqcE2i2u008GP",
      accounts: [""],
    },
    optimism: {
      url: "https://opt-sepolia.g.alchemy.com/v2/pkssOwWc3Bjxv6BibpPE6PLXTavd9OXF",
      accounts: [""],
    },
  },
};
