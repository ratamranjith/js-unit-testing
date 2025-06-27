export default function fibonacci(numbers) {

    if (numbers <= 0) {
        return 0
    }

    if (numbers === 1) {
        return 1
    }
    return fibonacci(numbers - 1) + fibonacci(numbers - 2)
}
