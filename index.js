var counter = require('./out.js')._foo
console.log(counter())  // -> 0
console.log(counter())  // -> 1
console.log(counter())  // -> 2