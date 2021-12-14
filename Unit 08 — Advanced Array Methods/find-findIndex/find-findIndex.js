// Kaitlin Berryman
// find-findIndex Exercise
// Springboard

/* Write a function called `findUserByUsername` which accepts an array of objects,
each with a key of username, and a string. The function should return the first object with the key of
username that matches the string passed to the function. If the object is not found, return undefined. */
function findUserByUsername(usersArray, username) {
  return usersArray.find(user => user.username == username);
}

// test findUserByUsername()
const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

console.log(findUserByUsername(users, 'mlewis')); // {username: 'mlewis'}
console.log(findUserByUsername(users, 'taco')); // undefined


/* Write a function called `removeUser` which accepts an array of objects,
each with a key of username, and a string. The function should remove the object from the array.
If the object is not found, return undefined. */
function removeUser(usersArray, username) {
  let index = usersArray.findIndex(user => user.username == username);
  let val = usersArray[index];

  if (index > -1) {
    usersArray.splice(index, 1);
    return val;
  }
  return;
}

// test removeUser()
const users2 = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

console.log(removeUser(users2, 'akagen')); // {username: 'akagen'}
console.log(removeUser(users2, 'akagen')); // undefined
