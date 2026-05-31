const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 1000, checkperiod: 1000 });

module.exports = cache;
