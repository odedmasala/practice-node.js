const utils = require("./strUtils")
exports.getArrLen = (arr) => {
    // ["hello", "bye"]
    let total = 0

    arr.forEach(string => {
        total += utils.getLength(string)
    })

    return total
}