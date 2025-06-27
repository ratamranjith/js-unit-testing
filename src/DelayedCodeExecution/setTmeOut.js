function delayGiven() {

    for (let i = 0; i < 10; i++) {

        if (i % 2 === 0) {
            setTimeout(() => {
                console.log(`Varatumma maame durrr:${i}`);
            })
        }
        else if (i % 3 === 0) {
            Promise.resolve().then(() => {
                console.log("Promise Maame" + i);
            })
        }
        else {
            console.log("vandhuteeeen" + i);
        }
    }
}

delayGiven()