let result = solution(10);

function solution(n) {
    let answer = 0;
    let count =  1000000;
    for(let i = 0; i < count; i++){
        if(n % i == 1){
            return i;
        }
    }
}