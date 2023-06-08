const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
  const { deployer } = await getNamedAccounts();
  const market = await ethers.getContract("Marketplace", deployer);
  console.log("Funding Contract...");
  nameVal = "get this";
  desc = "get this";
  price = 4 * 100000000000000000;
  quantity = 5;
  onsale = 3;
  const transactionResponse = await market.createProduct({
    nameVal,
    desc,
    price,
    quantity,
    onsale,
  });
  await transactionResponse.wait(1);
  console.log("Added");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
