let result = solution("banana"); // -1 -1 -1 2 2 2
console.log(result);

function solution(s) {
    return [...s].map((data, idx) => {
        return s.slice(0, idx).lastIndexOf(data) === -1 ? -1 : idx - s.slice(0, idx).lastIndexOf(data);
    })
}