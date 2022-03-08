// returns a randomly selected item from an array of items
const choice = (items) => {
  const random = items[Math.floor(Math.random() * items.length)];
  return random;
};

// removes the first matching item from items if it exists & returns it
// if it doesn't exist, return undefined
const remove = (items, item) => {
  const idx = items.indexOf(item);
  if(idx == -1) {
    return undefined;
  }
  items.splice(idx, 1);
};

export { choice };
export { remove };
