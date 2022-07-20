const os = require("os");



console.log(os.arch());

const ram = os.totalmem();
console.log(ram / 1024 / 1024 / 1024);

const ram1 = os.freemem();
console.log(ram1 / 1024 / 1024 / 1024);

console.log(os.platform())

console.log(os.hostname())

console.log(os.version())

console.log(os.type())