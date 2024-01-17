const Auction = artifacts.require('Auction');

module.exports = async function(deployer, network, accounts) {
	await deployer.deploy(Auction, 10000, "0xA9EDE95F120E02A9f71b6BF84a18ccA9A921A9d3")
	const auction = await Auction.deployed()
}