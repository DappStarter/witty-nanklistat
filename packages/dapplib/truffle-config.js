require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture street cost rifle horn harvest option blue truth'; 
let testAccounts = [
"0x1defbbb699a730dbcd84f2b96fce6112823bf209320a874a2e768ea434d464ea",
"0x8add6c6526818502edfb4b7358b38a18d584744cef9fefc41d64d28b22bd083a",
"0xdca0cb6e3335d2fdab90cf44d8a3cbc21905fdc0eccc6b35312c874cb603d353",
"0x9b1c877e54b07f6d29855b733cbf32adf78951ad881f1c4d448f107cb01fe7cb",
"0x34b87f2e70564992c3d8690dbba39e6c1a4b034913611a7bae54288f52b0b1e3",
"0xafa801a54047d6d0a4c89294210efb8bbc7b739f92d22944a542edbacd203ecd",
"0xf43326aeee5be778ee939a49e323d7281b3b23d0f0f7cbea31253c9cbc635bb0",
"0x101d0a042dc9f19e52d32629e45d149e5e37d996a8351d2325762a1121d1a087",
"0xfae73c2039842bd9d7e66197f15cbee825ea565522dbcd9398e606312b89d02a",
"0xe6cc426ac205a754c4249e0c3e416a875eec55b89e84fd1d36397be9990f5351"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
