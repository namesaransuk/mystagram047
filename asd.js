const name = 'Saransuk Yimyong'
const hello = name => `Hello ${name}`
const sum = (a, b) => a + b
const result = sum(2, 3)
console.log('result', result, 'Name :',hello(name))
module.exports = {
    sum,
    hello,
    name
}