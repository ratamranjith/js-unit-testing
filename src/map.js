export default function map_methods(n) {

    let newMap = new Map();

    //set
    for (let i = 0; i < n; i++) {
        newMap.set(i * 2, i);
    }
    return newMap
}
