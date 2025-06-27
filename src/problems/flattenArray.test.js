import { it, describe, expect } from "vitest";
import flattenArray from "./flattenArray";

describe('Flatten Array - Scenarios', () => {

    it('Simple nested Array', () => {
        expect(flattenArray([1, [3, 4]])).toEqual([1, 3, 4]);
    })
    it('medium nested Array', () => {
        expect(flattenArray([1, 2, [3, 4, [5, 6, [7, 8]]]])).toEqual([
            1, 2, 3, 4,
            5, 6, 7, 8
        ]);
    })
});


