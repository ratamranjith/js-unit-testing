export default function countVowels(str) {

    let vowels = {};
    if (str.length > 0) {
        str.split('').filter((val) => val.match(/[a|e|i|o|u]/i)).map((value, index) => {
            vowels[value] = (vowels[value] || 0) + 1
        })
        return vowels;
    }
    else {
        return 0;
    }
}
