export default function generatorsExample() {
    function* range() {
        for (let i = 0; i < 10; i++) {
            yield i;
        }
    }
    return [...range()];
}
