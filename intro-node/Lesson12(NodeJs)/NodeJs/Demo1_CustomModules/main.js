

const myUtils = require("./utils")

const my_utils = require("./utils2")

console.log(my_utils.getGreet("Avi"))
console.log(my_utils.mul(10, 5))


console.log(myUtils.getGreet("Avi"))
console.log(myUtils.add(4, 6))

async function getData() {
    const result = await myUtils.getAsyncData()
    console.log(result)
}
getData()