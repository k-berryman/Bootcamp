// Kaitlin Berryman
// foreach-map-filter Exercise
// Springboard

// forEach Section

/* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20] */
function doubleValues(arr){
    let doubled = [];
    arr.forEach(function(val) {
        doubled.push(val * 2);
    });
    return doubled;
}

// Test doubleValues()
console.log("doubleValues - test 1 - ", doubleValues([1,2,3]));
console.log("doubleValues - test 2 - ", doubleValues([5,1,2,3,10]));


/* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10] */
function onlyEvenValues(arr){
    let onlyEvens = [];
    arr.forEach(function(val) {
        if(val % 2 === 0) {
            onlyEvens.push(val);
        }
    });
    return onlyEvens;
}

// Test onlyEvenValues()
console.log("onlyEvenValues - test 1 - ", onlyEvenValues([1,2,3]));
console.log("onlyEvenValues - test 2 - ", onlyEvenValues([5,1,2,3,10]));


/* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se'] */
function showFirstAndLast(arr){
    let firstLastArr = [];
    let tempStr = "";

    arr.forEach(function(val) {
        for(let i=0; i <= val.length; i++) {
            if(i == 0 || i == val.length - 1) {
              tempStr += val[i];
            }
        }
        firstLastArr.push(tempStr);
        tempStr = "";
    });

    return firstLastArr;
}

// Test showFirstAndLast()
console.log("showFirstAndLast - test 1 - ", showFirstAndLast(['colt', 'matt', 'tim', 'test']));
console.log("showFirstAndLast - test 2 - ", showFirstAndLast(['hi', 'goodbye', 'smile']));


/* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object
Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')

    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}] */
function addKeyAndValue(arr,key,value){
    arr.forEach(function(val) {
        val[key] = value;
    });
    return arr;
}

// Test showFirstAndLast()
console.log("addKeyAndValue - test 1 - ", addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));


/* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}; */
function vowelCount(str){
    let vowelCountObj = {};
    let vowelFlag = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    let lowercase = str.toLowerCase();

    // for each vowel
    vowels.forEach(function(vowel) {
        [...lowercase].forEach(function(char) {
          if(char === vowel && vowelFlag === 0) {
            vowelCountObj[char] = 1;
            vowelFlag = 1;
          }
          else if(char === vowel && vowelFlag === 1) {
            vowelCountObj[char]++;
          }
        })
        vowelFlag = 0;
    })

    return vowelCountObj;
}

// test vowelCount()
console.log("vowelCount - test 1 - ", vowelCount('Elie'));
console.log("vowelCount - test 2 - ", vowelCount('Tim'));
console.log("vowelCount - test 3 - ", vowelCount('Matt'));
console.log("vowelCount - test 4 - ", vowelCount('hmmm'));
console.log("vowelCount - test 5 - ", vowelCount('I Am awesome and so are you'));


// map Section

/* Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled
Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6] */
function doubleValuesWithMap(arr) {
    let doubled = arr.map(val => val * 2);
    return doubled;
}

//test doubleValuesWithMap()
console.log("doubleValuesWithMap - test 1 - ", doubleValuesWithMap([1,2,3]));
console.log("doubleValuesWithMap - test 2 - ", doubleValuesWithMap([1,-2,-3]));


/* Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6] */
function valTimesIndex(arr){
    let multiplied = arr.map((val, index) => val * index);
    return multiplied;
}

// test valTimesIndex()
console.log("valTimesIndex - test 1 - ", valTimesIndex([1,2,3]));
console.log("valTimesIndex - test 2 - ", valTimesIndex([1,-2,-3]));


/* Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt'] */
function extractKey(arr, key){
    let keys = arr.map(el => el[key]);
    return keys;
}

// test extractKey()
console.log("extractKey - test 1 - ", extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'));


/* Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space.
Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele'] */
function extractFullName(arr){
    let fullNames = arr.map(el => el["first"].concat(" ", el["last"]));
    return fullNames;
}

// test extractFullName
console.log("extractFullName - test 1 - ", extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]));


// filter Section

/* Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}] */
function filterByValue(arr, key) {
    let hasKey = arr.filter(el => el[key]);
    return hasKey;
}

// test filterByValue
console.log("filterByValue - test 1 - ", filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner'));


/* Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.
Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined */
function find(arr, searchValue) {
    let firstMatch = arr.find(el => el === searchValue);
    return firstMatch;
}

// test find()
console.log("find - test 1 - ", find([1,2,3,4,5], 3));
console.log("find - test 2 - ", find([1,2,3,4,5], 10));


/* Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.
Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true} */
function findInObj(arr, key, searchValue) {
    let firstMatch = arr.find(el => el[key] === searchValue);
    return firstMatch;
}

// test findInObj
console.log("findInObj - test 1 - ", findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true));


/* Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz') */
function removeVowels(str) {
    let lowercase = str.toLowerCase();
    let noVowels = [...lowercase].filter(char => char !== "a" && char !== "e" && char !== "i" && char !== "o" && char !== "u");
    return noVowels.join("");
}

// test removeVowels()
console.log("removeVowels - test 1 - ", removeVowels('Elie'));
console.log("removeVowels - test 2 - ", removeVowels('TIM'));
console.log("removeVowels - test 3 - ", removeVowels('ZZZZZZ'));


/* Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).
Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // [] */
function doubleOddNumbers(arr) {
  let odds = arr.filter(num => num % 2 !== 0);
  let oddsDoubled = odds.map(val => val * 2);
  return oddsDoubled;
}

// test doubleOddNumbers()
console.log("removeVowels - test 1 - ", doubleOddNumbers([1,2,3,4,5]));
console.log("removeVowels - test 2 - ", doubleOddNumbers([4,4,4,4,4]));
