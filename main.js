const fs = require("fs")
console.log("--START--")
fs.readFile("data.txt", "utf-8", (error, data) => {
    console.log("data1 >>>>", data)
});
fs.readFile("data.txt", "utf-8", (error, data) => {
    console.log("data2 >>>>", data)
});
console.log("--END--")


fs.writeFile("hello.txt", "Hello node.js", "utf-8", (error, data) => {
    console.log("File saved")
});
fs.appendFile("hello.txt", "Hello node.js\n", "utf-8", (error, data) => {
    console.log("File saved")
});

console.log('dir',__dirname)
console.log('file',__filename)