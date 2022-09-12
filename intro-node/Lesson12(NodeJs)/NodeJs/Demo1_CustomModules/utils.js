const getGreet = (name) => {
    return "HELLO " + name
}

const add = (num1, num2) => {
    return num1 + num2
}

const getAsyncData = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("Hello"), 1000)
    })
}

module.exports = { getGreet, add, getAsyncData }


