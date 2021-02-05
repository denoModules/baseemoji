import { encode, decode } from './mod.ts'

const emojitext = encode(123456789);
console.log(emojitext);
const number = decode(emojitext);
console.log(number);