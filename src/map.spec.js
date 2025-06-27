import { it, expect, describe } from "vitest";
import map_methods from "./map";


describe('Map methods and its usage', () => {
    it('setting and getting the map methods', () => {
        const result = map_methods(3);
        expect(Array.from(result.entries())).toEqual([
            [0, 0],
            [2, 1],
            [4, 2]
        ]);
    })

    it('getting map size to be 50', () => {
        const result = map_methods(50);
        expect(result.size).toEqual(50); 
    })
})



// console.log(mapData);
// for (let i = 0; i < 10; i++) {
//     console.log(mapData.get(i * 2));
// }
// // size
// console.log(mapData.size);
// //has
// console.log(mapData.has(94));

// // using for of iterables
// for (const [key, vlue] of mapData) {
//     console.log(vlue);
// }

// console.log(mapData.keys());
// console.log(mapData.values());
// console.log(mapData.entries());

// mapData.forEach((key, value) => {
//     console.log(key + '' + value);
// })

