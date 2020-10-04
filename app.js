const {sum, hello, name} = require('./index.js')
const result = {
    sum,
    hello
}
// console.log('app.js > ', result.sum)
console.log('index.js >',`${result.sum(10,20)} is ${result.hello(name)}`)