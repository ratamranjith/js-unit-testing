import { it, describe, expect } from "vitest";
import countVowels from "./countVowels";

describe('Count Vowels scenarios - Scenarios', () => {
    it('Count Statement without special characters', () => {
        expect(countVowels('The editor shows sample boilerplate code when you choose language as Javascript and start coding')).toEqual({ e: 9, i: 4, o: 8, a: 9, u: 2 });
    })
});