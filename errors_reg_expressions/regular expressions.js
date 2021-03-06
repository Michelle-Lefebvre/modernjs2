/**
 * functions to evaluate regular expressions
 */

let re;
re = /hello/;
re = /hello/i; // i = case insensitive
re = /hello/g; // g = global search
// Note must put reg expression between /

// console.log(re.source);

// const result = re.exec('world hello');

// console.log(re.exec(result));
// console.log(re.exec(result[0]));
// console.log(re.exec(result.index));
const result = re.test('Hello');
console.log(re.exec(result.input));

// try catch & finally
try {
    myFunction()
} catch(err) {
    console.log(err)
    console.log(err.message)
    console.log(err.name)
    console.log(err instanceof TypeError)
} finally {
    console.log('finally always runs regardless of result.')
}

// produce a type error
try (
    null.myFunction()
) catch(err) {
    console.log(`${err.name}: It's null stupid`)
}

// SyntaxError
eval('Hello World')

// URIError
decodeURIComponent('%');

const user = {email: 'gdoe@gmail.com'}

// check user has a name
if(!user.name) {
    throw 'User has no name'
    // throw as type of error
    throw new SyntaxError('User has no name')
}

let re;
re = /hello/;
re = /hello/i; // i =  case insensitive
// re = /hello/g; // Global search

// console.log(re);
// console.log(re.source); // disregards slashes

// exec() - Return result in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - Returns index of the first match if not found retuns -1
// const str = 'Brad Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);


/**
 * contians or not contains in regular expresion
 */

let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;           // Must start with
re = / world$/i;     // Must ends with
re = /^hello$/i;     // Must begin and end with
re = /h.llo/i;      // Matches any ONE character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional character
re = /gre?a?y\?/i;    // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i;      // Must be an a or e
re = /[GF]ray/i;      // Must be a G or F
re = /[^GF]ray/i;      // Match anything except a G or F
re = /[A-Z]ray/;      // Match any uppercase letter
re = /[a-z]ray/;      // Match any lowercase letter
re = /[A-Za-z]ray/;   // Match any  letter
re = /[0-9][0-9]ray/;      // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,}o/i;      // Must occur at least {m} times

// Paretheses () - Grouping
re = /^([0-9]x){3}$/

// Shorthand Character Classes
re = /\w/;    // Word character - alphanumeric or _
re = /\w+/;    // + = one or more
re = /\W/;    // Non-Word character
re = /\d/;    // Match any digit
re = /\d+/;    // Match any digit 0 or more times
re = /\D/;      // Match any Non-digit
re = /\s/;      // Match whitespace char
re = /\S/;      // Match non-whitespace char
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if NOT followed by y


// String to match
const str = 'Gray?';


// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);