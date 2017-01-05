/*
    Write a JavaScript program to rotate the string 'w3resource' in right direction
    by periodically removing one letter from the end of the string and attaching it to the front.
*/
const rotate = (str) => {
    for (let i = 0; i < str.length; i++) {
        let lastChar = str.slice(-1);
        str = str.slice(0, -1);
        str = lastChar + str;
        console.log(lastChar)
        console.log(str)
    }
}

/*
    Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
*/

const isLeapYear = (year) => (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);

/*
    Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
*/
const cToF = (c) => {
    const f = ((9 * c) / 5) + 32
    console.log(f)
}
const fToC = (f) => {
    c = (5 * (f - 32)) / 9
    console.log(c)
}

/*
    Write a JavaScript function that reverse a number
*/
const reverseNum = num => {
    const arr = num.toString().split('');
    const str = arr.reverse().join("")
    const number = Number(str)
    console.log(number)
};

/*
    Write a JavaScript function that checks whether a passed string is palindrome or not
*/
const isPalindrome = (str) => {
    let string = str.toLowerCase().replace(/ /g,'');
    
    if (string.length === 1) {
        return console.log('true')
    }
    if (string[0] !== string[string.length -1]) {
        return console.log('false')
    }
    string = string.slice(0, -1)
    string = string.substring(1)
    if (string.length === 0) {
        return console.log('true')
    }

    return isPalindrome(string);
};
/*
    Write a JavaScript function that generates all combinations of a string.
    Example string : 'dog' 
    Expected Output : d,do,dog,o,og,g
*/
const getCombos = str => {
    let arr = [];
    let l = str.length
    for (let i = 0; i < l; i++) {
        let char = str[i];
        let numerator = 1;
        while (numerator <= l + 1) {
            const string = str.substring(0, numerator);
            if (arr.indexOf(string) === -1) {
                arr.push(string)
            }
            numerator++;
        }
        str = str.substring(1);
    }
    console.log(arr)
};
/*
    Write a JavaScript function that returns a passed string with letters in alphabetical order.
*/
const getAlphabeticalOrder = str => {
    const arr = str.split('');
    arr.sort();
    const string = arr.join('');
    console.log(string)
};
/*
    Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
*/
const convertUpperCase = str => {
    const arr = str.split(' ');
    const array = arr.map(word => {
        let firstLetter = word[0].toUpperCase();
        word = word.substring(1);
        word = firstLetter + word;
        return word;
    });
    const string = array.join(' ');
    console.log(string)
};
/*
    Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
*/
const getLongestWord = str => {
    const arr = str.split(' ');
    let longestWord = '';
    arr.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    })
    console.log(longestWord);
}
/*
    Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
    'Y' is not a vowel
*/
const getNumVowels = str => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let num = 0;
    for (let index = 0; index < str.length; index++) {
        if (vowels.indexOf(str[index]) !== -1) {
            num++;
        }
    }
    console.log(num);
}
/*
    Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
*/
const checkPrime = num => {
    let divisor = num - 1;
    while (divisor > 1) {
        const result = num / divisor
        if (Number.isInteger(result)) {
            return console.log('false');
        }
        divisor--;
    }
    console.log('true')
};
/*
    Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
*/
const getSecondLowestHighest = arr => {
    const sorted = arr.sort((a,b) => a - b);
    console.log([sorted[1], sorted[sorted.length - 2]])
}
/*
    Write a JavaScript function which says whether a number is perfect.
*/
const isPerfect = num => {
    let divisors = [];
    let index = num - 1;
    while (index > 0) {
        const result = num / index
        if (Number.isInteger(result)) {
            divisors.push(index)
        }
        index--;
    }
    const sum = divisors.reduce((prev, curr) => {
        return prev + curr;
    }, 0)
    if (sum === num) {
        return (console.log('true'))
    }
    console.log('false')
}
/*
    Write a JavaScript function to compute the factors of a positive integer.
*/
const getFactors = num => {
    let divisors = [];
    let index = num;
    while (index > 0) {
        const result = num / index
        if (Number.isInteger(result)) {
            divisors.push(index)
        }
        index--;
    }
    console.log(divisors)
};
/*
    Write a JavaScript function to compute the value of b to the n
*/
const getBToTheN = (b, n) => {
    if (n === 0) {
        return console.log(1);
    }
    let result = b;
    for (let i = 1; i < n; i++) {
        result = result * b;
    }
    console.log(result)
}
/*
    Write a JavaScript function to  get the number of occurrences of each letter in specified string.
*/
const getNumOccurances = str => {
    const arr = str.split('');
    const result = arr.reduce((prev, curr) => {
        if (prev[curr]) {
            const num = prev[curr] + 1;
            prev[curr] = num;
            return prev
        }
        prev[curr] = 1;
        return prev
    }, {});
    console.log(result)
}
/*
    Write a function for searching JavaScript arrays with a binary search.
*/

const binarySearch = (value, arr) => {
    let midPoint = Math.ceil(arr.length / 2) - 1;
    console.log(arr)
    console.log(midPoint)
    console.log(arr[midPoint])
    if (arr[midPoint] === value) {
        return console.log(arr[midPoint] + ' found')
    }

    if (arr.legth === 1) {
        return console.log('not found');
    }

    if (arr[midPoint] < value) {
        const array = arr.splice(midPoint + 1, arr.length / 2)
        return binarySearch(value, array);
    }

    if (arr[midPoint] > value) {
        const array = arr.splice(0, midPoint);
        return binarySearch(value, array);
    }
}
/*
    Write a JavaScript function to apply Bubble Sort algorithm.
*/
const bubbleSort = arr => {
    let changed = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            arr[i] = arr.splice(i + 1, 1, arr[i])[0];
            changed = true;
        }
    }
    if (changed) {
        return bubbleSort(arr);
    }
    return console.log(arr)
}
/*
    Write a JavaScript function to find longest substring in a given a string without repeating characters.
*/
const longestNoRepeat = str => {
    let longestString = '';
    for (let i = 0; i < str.length; i++) {
        let string = str[i];

    }
};
