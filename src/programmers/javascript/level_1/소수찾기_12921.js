let result = solution(10); 
console.log(result);

function solution(n) {
    let result = [];
    let arr = Array(n).fill(0);

    for(let i = 2; i <= n; i++) {
        arr[i] = i;
    }

    for(let j = 2; j <= n; j++) {
        if(arr[j] === 0) {
            continue;
        }
        result.push(j)
        arr[j] = 0;

        for(let k = j * 2; k <= n; k += j) {
            if(arr[k] === 0) {
                continue;
            }
            arr[k] = 0;
        }
    }

    return result.length;
}