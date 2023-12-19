let result = solution([1,2,7,6,4]); //[1,3,2,4,2]
console.log(result);

function solution(nums) {
    let count = 0;
    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                if(isPrime(nums[i]+nums[j]+nums[k])) {
                    count++;
                };
            }
        }
    }
    return count;
}

function isPrime(n) {
    if(n === 2) return true;
    if(n < 2 || n % 2 === 0) return false
    for(let i = 2; i <= parseInt(Math.sqrt(n)); i++){
        if(n % i === 0) return false;
    }
    return true;
}
