// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
    let dashed = '';
    (num.toString().split('')).forEach((digit, i, arr) => {
        if (Number(digit) % 2 && arr[i + 1] % 2) {
            dashed += digit + '-';
        } else {
            dashed += digit;
        }
    });
    return dashed;
}