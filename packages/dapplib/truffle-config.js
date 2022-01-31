require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space stone royal pitch prosper idea clock equal ghost'; 
let testAccounts = [
"0x4db48322eea1140edf9c1f38e266f8bb993dcde690966747afa67961c19f9b88",
"0xf63ea621e1d4acf6d422968662f99bd384fd9107b2aaf4ba4dcdc13a691f6731",
"0x3cc0b2b61b521df3e71288c4fe71488ec03c4fbcb1e52c8e3859f77a5c369d12",
"0x0977945ea0c930d2d722d1b8c00f66f07b9a65d3639e6f65e61a80843c63811b",
"0x167e8fe9e33032c06788653f1bff2bfe23cc2d01ec98c395bd3c52c05833bd85",
"0x40253fb897c0c4a2e83654b7aa0cb33bd3676ea75a5131a9c185cc78e874adc7",
"0x4d2ae92acded20ad43fce1e8fb9a1a1b19394506fe436ad261345af6cf5b84ce",
"0x1275b476d4bee99f87dbf5da59763e3e229eb5551c13a3e09f525413acc6a4d3",
"0x7057dfed6dc9493aa2ad262728e8156810ba0b8aa0bc803759f98ece7e217123",
"0x33a6af8b58707418c45f753e83cee552089ad2fb03e428ecce1749c6ace54ab5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


