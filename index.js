


function plus(num1 = 0, num2 = 0) {
    return num1 + num2
}

Array.prototype.plus = plus

module.exports = {plus}