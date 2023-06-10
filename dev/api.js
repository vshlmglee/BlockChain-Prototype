const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/blockchain", function (req, res) {
  res.send(bitcoin);
});

app.post("/transaction", function (req, res) {
  // console.log(req.body);
  // res.send(`The amount of the transaction is ${req.body.amount} bitcoin. `);
  const blockIndex = bitcoin.createNewTransaction(
    req.body.amount,
    req.body.sender,
    req.body.recipient
  );
  res.json({ note: `Transaction will be added in block ${bitcoin.chain.length+1}.` });
});

// const uuid = require('uuid/v1');
const { v1: uuidv1 } = require('uuid');

// const lastBlock = bitcoin.getLastBlock();
// const previousBlockHash = lastBlock["hash"];
// const currentBlockData = {
//   transactions: bitcoin.pendingTransactions,
//   index: lastBlock["index"] + 1
// };
// const noice = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
// const blockHash = bitcoin.hashBlock(
//   previousBlockHash,
//   currentBlockData,
//   noice
// );

app.get("/mine", function (req, res) {
  const lastBlock = bitcoin.getLastBlock();
  const previousBlockHash = lastBlock["hash"];
  const currentBlockData = {
    transactions: bitcoin.pendingTransactions,
    index: lastBlock["index"] + 1
  };
  const noice = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
  
  const blockHash = bitcoin.hashBlock(
    previousBlockHash,
    currentBlockData,
    noice
  );
  //bitcoin.createNewBlock(noice, previousBlockHash, blockHash);

  const nodeAddress = uuidv1().split('-').join('');

  bitcoin.createNewTransaction(12.5,"00",nodeAddress);


  const newBlock = bitcoin.createNewBlock(noice, previousBlockHash, blockHash);

  //const nodeAddress = uuidv1().split('-').join('');

  //bitcoin.createNewTransaction(12.5,"00",nodeAddress);

  res.json({
    note:"New block mined successfully",
    block:newBlock
  });
});

app.listen(3000, function () {
  console.log("listening on port 3000....");
});
