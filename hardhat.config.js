require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork:'Ropsten',
  solidity: "0.8.4",
  paths:{
    artifacts:'./src/artifacts',
  },
  networks:{
    Ropsten:{
      url:'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      accounts:['3a9283656038550f452b22bab1da59a4db2bda4d01e59285617f5e1ef2be1a20']
    }
  }
};
