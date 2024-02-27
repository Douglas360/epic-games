async function main() {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Leão", "Zebra", "Águia"],
    [
      "https://i.imgur.com/UrPaoZB.jpeg",
      "https://i.imgur.com/ZM2yJzP.jpeg",
      "https://i.imgur.com/7ObOwjH.png",
    ],
    [300, 200, 300], // Pontos de vida
    [200, 50, 25] // Dando de ataque
  );
  console.log("Contrato implantado no endereço:", gameContract.target);
  let txn;
// Só temos três personagens.
// Uma NFT com personagem no index 2 da nossa array.
txn = await gameContract.mintCharacterNFT(2);
await txn.wait();

// Pega o valor da URI da NFT
let returnedTokenUri = await gameContract.tokenURI(1);
console.log("Token URI:", returnedTokenUri);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});