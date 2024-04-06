async function main() {
  const address = process.env.CONTRACT_ADDRESS;
  const provider = new ethers.providers.JsonRpcProvider({url: process.env.RPCNODE})
  const balance = await provider.getBalance(address);
  const balanceInEth = ethers.utils.formatEther(balance);
  console.log(address + "'s balance on " + process.env.RPCNODE + " is " + balanceInEth);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
