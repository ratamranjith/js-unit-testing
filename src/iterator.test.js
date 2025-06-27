import { describe, it, expect } from "vitest";
import iterations from "./iterator.js";

describe('iterations function', () => {
    it('should return an array from 0 to 9', () => {
        expect(iterations()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should return error', () => {
        try {
            expect(iterations()).toEqual([9]);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });
});
