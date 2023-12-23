let result = solution(5, 3, 2);
console.log(result);

function solution(number, limit, power) {
    let data = Array(number+1).fill(0);
    for(let i = 1; i <= number; i++) { // 1 2 3 4 5
        for(let j = i; j <= number; j+=i){ // 
            console.log(j);
            data[j] += 1;
        }
    }
    
    for(let i = 0; i < data.length; i++) {
        if(data[i] > limit) {
            data[i] = power;
        }
    }

    return data.reduce((acc, num) => acc += num)
}