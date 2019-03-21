const express = require('express');
const BlockingScriptsRouter = express.Router();

const parentDirSplits = __dirname.split('\\');
parentDirSplits.pop();

const parentDir = parentDirSplits.join('\\');

BlockingScriptsRouter.get('/bob.png', delay(500));
BlockingScriptsRouter.get('/style.css', delay(1000));
BlockingScriptsRouter.get('/blocking.js', delay(1500));

module.exports = BlockingScriptsRouter;

function delay(milliseconds) {
    return (req, res) => {
        setTimeout(() => {
            res.sendFile(`${parentDir}/blocking-scripts/${req.url}`);
        }, milliseconds);
    };
}