let result = solution("try hello world");
console.log(result)

function solution(s) {
    return s.split(' ').map((data) => data.split('').map((item, idx) => {
        if((idx+1) % 2 == 1) {
            return item.toUpperCase();
        } else {
            return item.toLowerCase();
        }
    }).join('')).join(' ');
}