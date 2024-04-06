require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    aurora: {
      url: `https://mainnet.aurora.dev`,
      accounts: [process.env.privateKey],
      gas: 21000000,
      gasPrice: 8000000000,
      allowUnlimitedContractSize: true
    },
    auroratest: {
      url: `https://testnet.aurora.dev`,
      accounts: [process.env.privateKey],
    },
    fantom: {
      url: `https://rpc.ftm.tools/`,
      accounts: [process.env.privateKey],
    },
    hardhat: {
      chainId: 1337
    },
    taitap: {
      chainId: 1337,
      url: "https://hardhat.taitap.com",
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.privateKey]
    },
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [process.env.privateKey]
    },
  },
  solidity: {
    compilers: [
      { version: "0.8.7" },
      { version: "0.7.6" },
      { version: "0.6.6" }
    ]
  },
};
