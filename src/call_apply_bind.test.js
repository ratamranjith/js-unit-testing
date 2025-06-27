import { it, expect, describe } from 'vitest';
import greetMessage from './call_apply_bind';
import { person } from './call_apply_bind';
describe('Testing Call method', () => {
    it('initial Test on Call', () => {
        expect(greetMessage.call(person, "Hello Maapla")).toEqual('Hello Maapla : SampleFNameSampleLName');
    })

    it('using iterators with call', () => {
        const iterator = person[Symbol.iterator]();
        expect(iterator.next().value).toBe(3); // First call: start becomes 3
        expect(iterator.next().value).toBe(3); // Second call: start becomes 3 again (3 + 0)
        expect(iterator.next().value).toBe(6); // Third call: start becomes 6 (3 + 3)
    })
});