export const person = {
    firstName: `SampleFName`,
    lastName: `SampleLName`,
    [Symbol.iterator]() {
        let start = 0, end = 3;
        return {
            next() {
                [start, end] = [end, start + end];
                return { value: start, done: false}
            }
        }
    }
}

export default function greetMessage(message) {
    return `${message} : ${this.firstName + this.lastName}`;
}
