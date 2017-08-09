'use strict';

function fizbuzzwhizz(a, b, c, i) {
    var result;
    var num = i.split();
    for (let j in num) {
        if (num[j] === a) {
            result = 'Fizz';
        }
    }
else
    if (i % a === 0 && i % b === 0 && i % c === 0) {
        result = 'FizzBuzzWhizz';
    } else if (i % a === 0 && i % b === 0) {
        result = 'FizzBuzz';
    } else if (i % b === 0 && i % c === 0) {
        result = 'BuzzWhizz';
    } else if (i % c === 0 && i % a === 0) {
        result = 'FizzWhizz';
    } else if (i % a === 0) {
        result = 'Fizz';
    } else if (i % b === 0) {
        result = 'Buzz';
    } else if (i % c === 0) {
        result = 'Whizz';
    }
    else {
        result = i;
    }
    return result;
}
// write your code here...
