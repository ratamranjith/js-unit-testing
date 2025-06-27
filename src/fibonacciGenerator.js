export default function* fibonacciGenerator(count = 10) {
    let start = 0, end = 1;
    while (start < count) {
        yield start;
        [start, end] = [end, start + end];
    }
}
