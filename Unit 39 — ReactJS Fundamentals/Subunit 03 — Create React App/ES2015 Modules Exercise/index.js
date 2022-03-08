import arr from "./foods";
import { choice, remove } from "./helpers";

const randomFruit = choice(arr);
console.log(`I'd like one ${randomFruit}, please`);
console.log(`Here you go: ${randomFruit}`);
console.log('Delicious! May I have another?');
remove(randomFruit);
console.log(`I'm sorry, we're all out. We have ${arr.length-1} left.`)
