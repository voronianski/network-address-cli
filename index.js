#!/usr/bin/env node

const address = require('network-address');
const fs = require('fs-extra');
const path = require('path');

const optimist = require('optimist')
  .usage('\nUsage: network-address')
  .alias('ipv4', 'v4')
  .alias('ipv6', 'v6')
  .alias('help', 'h')
  .alias('version', 'v')
  .describe('ipv4', '')
  .describe('ipv6', '')
  .describe('help', '')
  .describe('version', '');
const argv = optimist.argv;

if (argv.help) {
  optimist.help();
  return optimist.showHelp();
}

if (argv.version) {
  const version = fs.readJSONSync(path.join(__dirname, './package.json')).version;

  return console.info(version);
}

if (argv.ipv4) {
  return console.info(address.ipv4());
}

if (argv.ipv6) {
  return console.info(address.ipv6());
}

console.info(address.ipv4());
console.info(address.ipv6());
