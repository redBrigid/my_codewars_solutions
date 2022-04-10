// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// You'll be given 2 numbers as arguments: (num,s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count.

// Return "Not valid" instead if any one of the inputs is not an integer or is less than 0.

// For this kata, single digit numbers will NOT be considered numerical palindromes.

// palindrome(6,4) => [11,22,33,44]
// palindrome(59,3) => [66,77,88]
// palindrome(101,2) => [101,111]
// palindrome("15651",5) => "Not valid" 
// palindrome(1221,"8") => "Not valid" 

//-----------------
// my solution:

// inputs: 
// - num - starting point
// s - size or output array

// output:
// - array of size s

// algorithm:
// 1. check is num is palindrome, if so include it into result array
// 2. find first palindrome after num
// 3. repeat s times

// key is step 2
// I could go one by one just incrementing by 1 
// and checking if something is a palindrome or not
// but it's not efficient - it's dumb method
// I want here to predict next palindrome

// let's look at some examples:
// 98 -> 99, 101, 111, 121...
// 1923 -> 1991, 2002, 2112...
// 21348 -> 21421, 21521...
// any pattern? yeah!
// 1. cut to half like 9|8, 19|23, 21|3|48
// 2. mirror and check is bigger than num - 99>98 v, 1991>1932 v, 21312<21348 x 
// 3. pick smaller (9 - 19 - 21), 
// 4. increment less meaning in middle number (9 - 9 - 3) and mirror
// 5. if it's 9 - add 1 to next number and continue


//-------------
//unfinished, started overcomplicated version

function palindrome(num, s) {
    const result = [];

    if (s < 1) return result;

    function isNumPalindrome() {
        if (num.split('').reverse().join('') == num) {
            result.push(num);
            s--;
        }
    }

    function checkMirroredNum(num) {
        if (s < 1) return result;
        let n = num.split('').length % 2 ? mirrorOdd(num) : mirrorEven(num);
        if (n > num) {
            result.push(n);
            s--;
            num = n;
        }
    }

    function mirrorOdd(num) {
        return Number(num.split('').splice(0, Math.floor((length / 2) - 1))
            .concat(arr[Math.floor((length / 2))])
            .concat(num.split('').splice(0, Math.floor((length / 2) - 1)).reverse())
            .join());
    }

    function mirrorEven(num) {
        return Number(num.split('').splice(0, Math.floor((length / 2) - 1))
            .concat(num.split('').splice(0, Math.floor((length / 2) - 1)).reverse())
            .join());
    }

    function findNext() {
        if (s < 1) return result;

        for (let i = 0; i < s; i++) {

            //wez polowe podnies najmniej znaczacy i mirror

            // w kazdej iteracji podniesc najmniej znaczaca cyfre o 1 
            // countNextCandidate()
            //uzweglednic przepelnienia
            //handleOvedrflow()

            //check mirrored num
            let n = num.split('').length % 2 ? mirrorOdd(num) : mirrorEven(num);
            if (n > num) {
                result.push(n);
            } else {
                s++;
            }

            //num.split('').reverse().join('')
            if (mirrored > num) {
                result.push(mirrored);
            }
            //cut to half
        }
    }

    checkMirroredNum(num);
    isNumPalindrome();
    findNext();

    return result;
}