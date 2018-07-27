#!/usr/bin/env node

const util = require('util');
const exec = util.promisify(require('child_process').exec);

const files = process.argv.slice(2);
files.forEach(element => {
    touch(element);
});

async function touch(filename) {
    const { stdout, stderr } = await exec(`type nul >> ${filename}`);
    if(stderr) {
        console.log(`Could not create file ${filename}. Error: ${stderr}`);
        return;
    }
    console.log(`${filename} created`);
}