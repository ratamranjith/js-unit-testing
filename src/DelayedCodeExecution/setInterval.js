function animateWords() {
    let i = 0;
    const interval = setInterval(() => {
        console.clear(); // Better than \x1b[2J
        console.log(i);
        i++;
        if (i >= 50) clearInterval(interval);
    }, 1000); // Slower to observe changes

}



animateWords();
