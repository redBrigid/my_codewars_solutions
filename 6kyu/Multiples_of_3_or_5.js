// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
    if (number <= 3) return 0
    if (number <= 5) return 3
    let x = 3
    let multiplier = 1
    let list3 = []
    let list5 = []
    while (x < number) {
        list3.push(x)
            ++multiplier
        x = 3 * multiplier
    }
    x = 5
    multiplier = 1
    while (x < number) {
        list5.push(x)
            ++multiplier
        x = 5 * multiplier
    }
    let sum = number < 3 ? 0 : (list3.length == 1 ? list3[0] : list3.reduce((acc, x) => {
        if (x % 5 != 0) { return acc + x } else { return acc }
    }))
    sum += number < 5 ? 0 : (list5.length == 1 ? list5[0] : list5.reduce((acc, x) => {
        return acc + x
    }))
    return sum
}