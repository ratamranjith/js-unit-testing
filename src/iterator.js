export default function iterations() {
    let range = {
        [Symbol.iterator]() {
            let i = 0;
            return {

                next() {

                    if (i >= 10) {
                        return {
                            value: undefined,
                            done: true

                        }

                    }
                    return {
                        value: i++,
                        done: false
                    }
                }
            }
        }
    }
    return [...range];
}
