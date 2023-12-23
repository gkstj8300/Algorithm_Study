let result = solution("1S*2T*3S");
console.log(result);

function solution(dartResult) {
    let map = new Map();
    let num = 1;
    let data = 0;
    for(let i = 0; i < dartResult.length; i++) {
        if(!isNaN(dartResult[i])){
            if(dartResult[i-1] == 1 && dartResult[i] == 0) {
                data = 10;
            } else {
                data = Number(dartResult[i]);
            }
        }
        if(dartResult[i] === 'S') {
            map.set(num, data);
            num++;
        } else if (dartResult[i] === 'D') {
            map.set(num, data**2);
            num++;
        } else if (dartResult[i] === 'T') {
            map.set(num, data**3);
            num++;
        } else if (dartResult[i] === '*') {
            map.set(num-1, map.get(num-1)*2);
            map.set(num-2, map.get(num-2)*2);
        } else if (dartResult[i] === '#') {
            map.set(num-1, map.get(num-1)*-1);
        }
    }
    let result = [...map.values()].filter(item => !isNaN(item));
    return result.reduce((acc, data) => acc += data);
}