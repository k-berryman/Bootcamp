// Kaitlin Berryman
// reduce Exercise
// Springboard

/* Write a function called extractValue which accepts an array of objects and a key
   and returns a new array with the value of each object at the key. */
function extractValue(arr, key) {
  return arr.reduce(function(accumulator, next) {
    accumulator.push(next[key]);
    return accumulator;
  }, []);
}

// test extractValue()
const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
console.log(extractValue(arr,'name')); // ['Elie', 'Tim', 'Matt', 'Colt']


/* Write a function called vowelCount which accepts a string
   and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string.
   This function should be case insensitive so a lowercase letter and uppercase letter should count */
function vowelCount(str) {
  const vowels = "aeiou";
  return [...str].reduce(function(accumulator, next) {
    str.toLowerCase();
    
  }, {});
}

// test vowelCount()
console.log(vowelCount('Elie')); // {e:2,i:1};
console.log(vowelCount('Tim')); // {i:1};
console.log(vowelCount('Matt')); // {a:1})
console.log(vowelCount('hmmm')); // {};
console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1};


/* Write a function called addKeyAndValue which accepts an array of objects
   and returns the array of objects passed to it with each object
   now including the key and value passed to the function. */
function addKeyAndValue(arr, key, value) {

}

// test addKeyAndValue()
const arr2 = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

console.log(addKeyAndValue(arr2, 'title', 'Instructor'));
/*[
    {title: 'Instructor', name: 'Elie'},
    {title: 'Instructor', name: 'Tim'},
    {title: 'Instructor', name: 'Matt'},
    {title: 'Instructor', name: 'Colt'}
  ]*/


/* Write a function called partition which accepts an array and a callback
   and returns an array with two arrays inside of it.

   The partition function should run the callback function on each value in the array and
   if the result of the callback function at that specific value is true, the value should be placed in the first subarray.
   If the result of the callback function at that specific value is false, the value should be placed in the second subarray.*/
function partition(arr, callback) {

}

// test partition()
function isEven(val){
    return val % 2 === 0;
}

const arr3 = [1,2,3,4,5,6,7,8];

console.log(partition(arr3, isEven)); // [[2,4,6,8], [1,3,5,7]];

function isLongerThanThreeCharacters(val){
    return val.length > 3;
}

const names = ['Elie', 'Colt', 'Tim', 'Matt'];

console.log(partition(names, isLongerThanThreeCharacters)); // [['Elie', 'Colt', 'Matt'], ['Tim']]
