// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  // Grab the deployer account
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  

  // Deploy the BeartTest contract
  const BeartTest = await hre.ethers.getContractFactory("BeartTest");
  const contract = await BeartTest.deploy(deployer.address);
  await contract.waitForDeployment();

  console.log("BeartTest deployed to:", await contract.getAddress());
}

// Run the script
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
