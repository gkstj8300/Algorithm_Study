let result = solution("10203", "15");
console.log(result)

function solution(t, p) {
    let result = [];
    for(var i = 0; i < t.length - p.length+1; i++) {
        result.push(t.substring(i, p.length+i));   
    }
    return result.filter((x) => x <= p).length;
}