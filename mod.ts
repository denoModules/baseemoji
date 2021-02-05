import { emojiString2Array, emojiArray } from './emoji.ts';
export const encode = (number: number): string => {
    const radix: number = emojiArray.length;
    const arr: string[] = [];
    let n = number;
    do {
        const mod = n % radix;
        n = (n - mod) / radix;
        arr.unshift(emojiArray[mod]);
    } while (n);
    return arr.join('');
}

export const decode = (str: string): number => {
    let input: string[] = emojiString2Array(str);
    const radix: number = emojiArray.length;
    const len = input.length;
    let i = 0;
    let origin_number = 0;
    while (i < len) {
        origin_number += Math.pow(radix, i++) * emojiArray.indexOf(input[len - i]);
    }
    return origin_number;
}