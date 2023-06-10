// const Blockchain = require('./blockchain');

// const bitcoin = new Blockchain();

// bitcoin.createNewBlock(24864,'FKAJYUS45155A','45ADJASGNKAD');

// //console.log(bitcoin);

// bitcoin.createNewBlock(5464,'HASGDKASGUS45155A','449A8DSDADAGNKAD');

// //console.log(bitcoin);

// bitcoin.createNewBlock(78466,'SDHGSKDJ56749V6','JKBJDSJKLL7512');

// bitcoin.createNewTransaction(1000,'ChandlerASADSAD5455','JoeyDASDSDSA7984FS4F6');

// bitcoin.createNewBlock(4578,'45DS65SDFD6F','JHGDHSKGDDFVCNDCEUI');

// //console.log(bitcoin);

// console.log(bitcoin.chain[1]);

// bitcoin.createNewTransaction(1000,'CDVSDVDSdlerASADSAD5455','JSFDBFBoeyDASDSDSA7984FS4F6');
// bitcoin.createNewTransaction(1080,'ChaDFDSSndlerASADSAD5455','DSFDJVBXZoeyDASDSDSA7984FS4F6');
// bitcoin.createNewTransaction(1400,'ChandDSVCVXCVAAlerASADSAD5455','GNGNFGJoeyDASDSDSA7984FS4F6');
// bitcoin.createNewTransaction(5000,'ChanEGVCXCdlerASADSAD5455','FGNGFNJoeyDASDSDSA7984FS4F6');
// bitcoin.createNewTransaction(4500,'CSDFVSBFBhandlerASADSAD5455','FNGNGFNGFJoeyDASDSDSA7984FS4F6');

// //console.log(bitcoin);

// bitcoin.createNewBlock(7481,'BVGEINMBDS789','YEVCUHJDK7456');

// console.log(bitcoin);

// console.log(bitcoin.chain[0]['hash']);

// const Blockchain = require("./blockchain");

// const bitcoin = new Blockchain();

// const previousBlockHash = "7897456897GDJSFKDSFKA";

// const currentBlockHash = [
//   {
//     amount: 10,
//     sender: "GHKFDS874654ASFDS",
//     recipient: "HGDKGFDSGF7486456",
//   },
// ];

// const nonce = 78646;

// var s = bitcoin.hashBlock(previousBlockHash,currentBlockHash,nonce);

// console.log(s);

// const sha = require('sha256');
// console.log(sha('hello world!!!!!!'));

// const Blockchain = require('./blockchain');

// const bitcoin = new Blockchain();

// const previousBlockHash = 'GLDSFH7456546';
// const currentBlockData = [{
//     amount:14540,
//     sender:'FHSAJDGSSS79843',
//     recipient : 'GJSDGSKAHD784D6S6',
// }];

// console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData));

// console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,'73485'));

const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

// console.log(bitcoin);

// bitcoin.createNewTransaction(1000,'JHDAHFHP87465','GKSGDGUASGD');

// bitcoin.createNewBlock(100,'0','47987DFSDF');

// console.log(bitcoin);

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1686034168134,
      transactions: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0",
    },
    {
      index: 2,
      timestamp: 1686048449873,
      transactions: [],
      nonce: 18140,
      hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      previousBlockHash: "0",
    },
    {
      index: 3,
      timestamp: 1686048489745,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "88caec10045711ee93233bbcad7298bc",
          transactionId: "88e021c0045711ee93233bbcad7298bc",
        },
        {
          amount: 100,
          sender: "1111JDKNDKFNDFKLSFD754",
          recipient: "5555JGFUEKEBFSSDFB546",
          transactionId: "92866090045711ee93233bbcad7298bc",
        },
        {
          amount: 10000,
          sender: "dsfsdgfgDKNDKFNDFKLSFD754",
          recipient: "erbffldgkdj555JGFUEKEBFSSDFB546",
          transactionId: "9adee9b0045711ee93233bbcad7298bc",
        },
      ],
      nonce: 164841,
      hash: "0000d7e45f70a7d37a0d99b51d8c73c2727a7bc5e396fa7109e94fb69cc1d289",
      previousBlockHash:
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    },
    {
      index: 4,
      timestamp: 1686048503330,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "a08ee810045711ee93233bbcad7298bc",
          transactionId: "a096b040045711ee93233bbcad7298bc",
        },
      ],
      nonce: 14822,
      hash: "000044f26d574eb3655b2f87ce65e4ecf94191aa6823aee54ab23119d5bf6f24",
      previousBlockHash:
        "0000d7e45f70a7d37a0d99b51d8c73c2727a7bc5e396fa7109e94fb69cc1d289",
    },
  ],
  pendingTransactions: [
    {
      amount: 12.5,
      sender: "00",
      recipient: "a8a7d020045711ee93233bbcad7298bc",
      transactionId: "a8a9cbf0045711ee93233bbcad7298bc",
    },
  ],
  currentNodeUrl: "http://localhost:3001",
  networkNodes: [],
};

console.log(bitcoin.chainIsValid(bc1.chain));
