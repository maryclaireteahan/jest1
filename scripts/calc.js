function addition(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        return num1 + num2;
    } else {
        return "Not a valid choice"
    }
}

module.exports = addition;