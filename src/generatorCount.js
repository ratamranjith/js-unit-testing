export default function* countFn(n) {
    let count = 0;
    while (count < n) {
        yield count++
    }
}