/* eslint-disable no-console */
const esm = require("../esm")

const myRequire = esm(module)

const data = myRequire("./myCommonModule")

console.log(data)
