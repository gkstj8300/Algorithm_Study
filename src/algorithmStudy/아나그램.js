// 아나그램

function solution(a, b) {
    if(a.length !== b.length) {
        return console.log(false);
    }

    let lookup = {};

    for(let char of a) {
        lookup[char] = (lookup[char] || 0) + 1;
    }

    for(let char of b) {
        if(!lookup[char]) {
            return console.log(false);
        }
        lookup[char]--;
    }

    return console.log(true);
}


function solution2(a, b) {
    if (a.length !== b.length) return console.log(false);

    const freq = {};

    for (let char of a) {
        freq[char] = (freq[char] || 0) + 1;
    }
    console.log("check", freq);
    for (let char of b) {
        if (!freq[char]) return console.log(false); // 없거나 0이면 false
        freq[char]--;
    }

    return console.log(true);
}

solution('aaz', 'zza');
solution('anagram', 'nagaram');
solution('awesome', 'awesom');
solution('texttwisttime', 'timetwisttext');
