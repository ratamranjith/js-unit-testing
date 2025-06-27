function decimalToBinary(number) {
    let val = '';
    if (number === 0) {
        return 0
    }
    while (number > 0) {
        val = (number % 2) + val;
        number = Math.floor(number / 2);
    }
    return val;
}

console.log(decimalToBinary(20));
