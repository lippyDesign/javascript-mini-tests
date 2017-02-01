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
        return true
    }
    if (string[0] !== string[string.length -1]) {
        return false
    }
    string = string.slice(0, -1)
    string = string.substring(1)
    if (string.length === 0) {
        return true
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
        const testString = str.substring(i)
        let string = str[i];

        for (let z = 1; z < testString.length; z++) {
            if (string.indexOf(testString[z]) !== -1) {
                break;
            } else {
                string = string + testString[z];
            }
        }

        if (longestString.length < string.length) {
            longestString = string;
        }
    }
    console.log('final: ' + longestString);
};
/*
    Write a JavaScript function that returns the longest palindrome in a given string.
*/
const longestPalindrome = str => {
    let palindromes = []
    for (let i = 0; i < str.length; i++) {
        const testString = str.substring(i);
        for (let z = 0; z < testString.length; z++) {
            const string = testString.slice(0, testString.length - z)
            const array = string.split('').reverse();
            const reveresedString = array.join('');
            if (string === reveresedString && string.length > 1) {
                palindromes.push(string)
            }
        }
    }
    let longest = palindromes.reduce((prev, curr) => {
        if (curr.length > prev.length) {
            return curr;
        }
        return prev;
    }, '');
    console.log(longest)
}
/*
    Write a JavaScript program to calculate the factorial of a number.
*/
getFactorial = num => {
    if (num === 0) {
        return 1;
    }
    return num * getFactorial(num - 1)
}
/*
    Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
*/
const gcd = (a, b) => {
    if (!b) {  
        return a;  
    }  
  
    return gcd(b, a % b);  
};  
/*
    Write a JavaScript program to get the integers in range (x, y).
*/
const getRange = (x, y) => {
    if (y - x === 2) {
        return [x + 1];
    }
    let list = getRange(x, y - 1);

    list.push(y - 1);
    return list;
};

/*
    Write three functions that compute the sum of the numbers in a given list using a for-loop, a while-loop, and recursion.
*/

const sumForLoop = lst => {
    let total = 0;
    for (let i = 0; i < lst.length; i++) {
        total = total + lst[i];
    }
    return total;
}
const sumWhileLoop = lst => {
    let total = 0;
    while (lst.length) {
        total = total + lst[0];
        lst.splice(0, 1);
    }
    return total;
}
const sumRecur = lst => {
    if (lst.length === 2) return lst[0] + lst[1];
    const num = lst.splice(0, 1);
    return num[0] + sumRecur(lst);
}

/*
    Write a function that combines two lists by alternatingly taking elements. For example: given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].
*/

const combineTwoLists = (lst1, lst2) => {
    let totalList = []
    let len = 0;
    if (lst1.length >= len) len = lst1.length;
    if (lst2.length > len) len = lst2.length;
    for (let i = 0; i < len; i++) {
        if (lst1[i]) {
            totalList.push(lst1[i]);
        }
        if (lst2[i]) {
            totalList.push(lst2[i]);
        }
    }
    return totalList;
};

/*
    Write a function that computes the list of the first 100 Fibonacci numbers. By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
    As an example, here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.
*/

const fiboNumbers = () => {
    let arr = [0, 1]
    while (arr.length < 100) {
        let a = arr[arr.length - 1];
        let b = arr[arr.length - 2];
        arr.push(a + b);
    }
    return arr.reduce((prev, curr) => {
        return prev + curr
    }, 0);
}
/*
    Write a function that given a list of non negative integers, arranges them such that they form the largest possible number.
    For example, given [50, 2, 1, 9], the largest formed number is 95021.
*/

const largestPossNum = lst => {
    let newList = [];
    lst.forEach(item => {
        let str = item.toString();
        let arr = str.split('');
        arr.forEach(i => newList.push(i));
    });
    newList.sort((a, b) => b - a);
    return Number(newList.join(''));
};
/*
    Write a program that outputs all possibilities to put + or - or nothing between the numbers 1, 2, ..., 9 (in this order) such that the result is always 100.
    For example: 1 + 2 + 34 – 5 + 67 – 8 + 9 = 100.
*/

const getHundredFromOneToNine = () => {
    let string = '123456789';
    let mainArr = []
    for (let i = 1; i <= 9; i++) {
        let str = string
        let subStr = str.slice(0, i);
        str = str.slice(i);
        let arr = [Number(subStr)]
        for (let x = 0; x < str.length; x++) {
            arr.push(Number(str[x]))
        }
        mainArr.push(arr)
    }
    
    console.log(mainArr)
};



function LetterChanges(str) { 
    let alphabet = 'abcdefghijklmnopqrstvuxyz';
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'z') {
            newStr = newStr + 'A'
        } else {
            let index = alphabet.indexOf(str[i])
            if (['a', 'e', 'i', 'o', 'u'].some(char => char === alphabet[index + 1])) {
                let charr = alphabet[index + 1].toUpperCase()
                newStr = newStr + charr
            } else {
                newStr = newStr + alphabet[index + 1]
            }
        }
    }
    return newStr;
}

function SimpleSymbols(str) { 
    let alphabet = 'abcdefghijklmnopqrstvuxyz';
    for (let i = 0; i < str.length; i++) {
        if (alphabet.indexOf(str[i]) !== -1 && str[i - 1] === '+' && str[i + 1] === '+') {
            rrr = 'true';
        } else if (alphabet.indexOf(str[i]) !== -1 && str[i - 1] !== '+' && str[i + 1] === '+') {
            return 'false'
        } else if (alphabet.indexOf(str[i]) !== -1 && str[i - 1] === '+' && str[i + 1] !== '+') {
            return 'false'
        }
    }
    return rrr;  
}

function CheckNums(num1,num2) { 
    if (num2 > num1) {
        return 'true';
    } else if (num2 === num1) {
        return '-1';
    } else {
        return 'false'
    }   
}
/*
    Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 
*/
function TimeConvert(num) { 
    let h = Math.floor(num / 60);
    let m = num % 60;
    return h + ':' + m;
}
/*
    Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 
*/

function AlphabetSoup(str) { 
    let rrr = str.split('').sort().join('')
  // code goes here  
  return rrr; 
         
}
/*
    Define a repeatify function on the String object. The function accepts an integer that specifies how many times the string has to be repeated. The function returns the string repeated the number of times specified.
*/
String.prototype.repeatify = String.prototype.repeatify || function(num) {
    const x = this.slice()
    let str = '';
    for (let i = 0; i < num; i++) {
        str = str + x;
    }
    return str;
};
/*
    check if two strings are anagrams. 'public relations' and 'crap built on lies' are anograms
*/
const anagramCheck = (str1, str2) => {
    str1 = str1.replace(/\s/g, '');
    str2 = str2.replace(/\s/g, '');
    const arr1 = str1.toLowerCase().split('');
    const arr2 = str2.toLowerCase().split('');
    let string1 = arr1.sort().join('');
    let string2 = arr2.sort().join('');
    if (string1 === string2) return true;
    else return false;
};
/*
    check if two strings are anagrams without using sort(). 'public relations' and 'crap built on lies' are anograms
*/
const anagramCheckTwo = (str1, str2) => {
    str1 = str1.toLowerCase();
    str1 = str1.replace(/\s/g, '');
    str2 = str2.toLowerCase();
    str2 = str2.replace(/\s/g, '');
    if (str1.length !== str2.length) {
        return false;
    }
    if (str1.length === 1 && str2.length === 1 && str1 === str2) {
        return true;
    }
    if (str2.indexOf(str1[0]) !== -1) {
        str2 = str2.replace(str1[0], '');
        str1 = str1.substring(1, str1.length);
        return anagramCheckTwo(str1, str2)
    } else {
        return false;
    }
};
/*
    check if two strings are anagrams by counting letters. 'public relations' and 'crap built on lies' are anograms
*/
const anagramCheck3 = (s1, s2) => {
    s1 = s1.replace(/\s/g, '').toLowerCase();
    s2 = s2.replace(/\s/g, '').toLowerCase();
    const count = {};
    for (let i = 0; i < s1.length; i++) {
        const char = s1[i];
        if (count[char]) {
            count[char] += 1;
        } else {
            count[char] = 1;
        }
    }
    for (let i = 0; i < s2.length; i++) {
        const char = s2[i];
        if (count[char]) {
            count[char] -= 1;
        } else {
            count[char] = 1;
        }
    }
    for (z in count) {
        if (count[z]) return false;
    }
    return true;
};

/*
    pair sum
*/

const pairSum = (arr, num) => {
    const results = [];
    const calc = (arr, num) => {
        if (arr.length <= 1) {
            return;
        }
        const firstNum = arr.shift();
        const numNeeded = num - firstNum;
        if (!arr.find(item => item === numNeeded)) {
            return calc(arr, num);
        } else {
            results.push([firstNum, numNeeded]);
            const index = arr.indexOf(numNeeded);
            arr.splice(index, 1);
        }
        if (arr.length > 1) {
            return calc(arr, num);
        }
        
    };
    calc(arr, num)
    return results;
};
/*
    find all missing numbers when given two arrays
*/
const finder = (arr1, arr2) => {
    let check = arr1.length >= arr2.length ? arr1 : arr2;
    let toBeChecked = arr1.length < arr2.length ? arr1 : arr2;
    const results = [];
    for (let i = 0; i < check.length; i++) {
        if (toBeChecked.indexOf(check[i]) === -1) {
            results.push(check[i]);
        } 
        else toBeChecked.splice(toBeChecked.indexOf(check[i]), 1);
    }

    return results;
};

const finderByCounting = (arr1, arr2) => {
    let check = arr1.length >= arr2.length ? arr1 : arr2;
    const result = {};
    for (let i = 0; i < check.length; i ++) {
        if (arr1[i]) {
            if (result[arr1[i]]) {
                result[arr1[i]] += 1;
            } else {
                result[arr1[i]] = 1;
            }
        }
        if (arr2[i]) {
            if (result[arr2[i]]) {
                result[arr2[i]] -= 1;
            } else {
                result[arr2[i]] = 1;
            }
        }
        if (result[arr2[i]] === 0) delete result[arr2[i]];
    }

    return result;
};

/*
    sentence reversal
*/
const sentenceReversal = str => str.trim().split(" ").reverse().join(" ");

const sentenceReversalLong = str => {
    if (!str.length) return '';
    const results = [];
    let currentWord = '';
    let stringToReturn = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            currentWord += str[i];
        } else {
            if (currentWord.length > 0) {
                results.push(currentWord);
                currentWord = '';
            }
        }
    }
    if (currentWord.length > 0) {
        results.push(currentWord);
        currentWord = '';
    }
    while (results.length) {
        const item = results.pop();
        if (results.length > 0) {
            stringToReturn = stringToReturn + item + ' ';
        } else {
            stringToReturn = stringToReturn + item;
        }
    }
    return stringToReturn;
};
/*
    compress a string ('AAAbbb') becomes 'A3b3
*/
const compress = str => {
    if (!str.length) return 'Enter a valid string';
    let temp = '';
    let counter = 0;
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!temp) {
            temp += str[i];
            counter += 1;
        } else {
            if (temp === str[i]) {
                counter += 1;
            } else {
                result = result + temp + counter;
                counter = 1;
                temp = str[i]
            }
        }
    }
    if (counter) {
        result = result + temp + counter;
    }
    return result;
};
/*
    unique characters
*/
const uniqueCharacters = str => {
    const obj = {}
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) obj[str[i]] = 1;
        else return false;
    }
    return true;
}
/*
    implement a stack (Last in First out - like a stack of books)
*/
function Stack() { // ES 5
    this.items = [];
}

Stack.prototype.isEmpty = function() {
    return this.items.length === 0;
};

Stack.prototype.addItem = function(item) {
    this.items.push(item);
};

Stack.prototype.removeItem = function() {
    return this.items.pop();
};

Stack.prototype.peek = function() {
    return this.items[this.items.length - 1];
};

Stack.prototype.size = function() {
    return this.items.length;
};

class newStack { // es 6
    constructor(items) {
        this.items = []
    }

    isEmpty() {
        return this.items.length === 0;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }
}

/*
    implement a Queue (first in, first out - like people in line)
*/

function Queue() { //es5
    this.items = [];
}
Queue.prototype.size = function() {
    return this.items.length;
};
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
};
Queue.prototype.enqueue = function(item) {
    this.items.push(item);
};
Queue.prototype.dequeue = function() {
    return this.items.shift();
};

class NewQueue { //es6
    constructor() {
        this.items = [];
    }
    size() {
        return this.items.length;
    }
    isEmpty() {
        return this.items.length === 0;
    }
    enqueue(item) {
        this.items.splice(0, 0, item)
    }
    dequeue() {
        return this.items.pop();
    }
}

/*
    implement a Deque (can add and subtract from both ends);
*/

function Deque() { //es 5
    this.items = [];
}
Deque.prototype.size = function() {
    return this.items.length;
};
Deque.prototype.isEmpty = function() {
    return this.items.length === 0;
};
Deque.prototype.addToFront = function(item) {
    this.items.splice(0, 0, item);
};
Deque.prototype.addToRear = function(item) {
    this.items.push(item);
};
Deque.prototype.removeFromFront = function() {
    return this.items.shift();
};
Deque.prototype.removeFromRear = function() {
    return this.items.pop();
};

class DequeES6 {
    constructor(items) {
        this.items = [];
    }
    size() {
        return this.items.length;
    }
    isEmpty() {
        return this.items.length === 0;
    }
    addToFront(item) {
        this.items.splice(0, 0, item);
    }
    addToRear(item) {
        this.items.push(item);
    }
    removeFromFront() {
        return this.items.shift();
    }
    removeFromRear() {
        return this.items.pop();
    }
}
const d = new DequeES6();