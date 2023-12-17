let result = solution([-2, 3, 0, 2, -5]);
console.log(result)

function solution(number) {
    var count = 0;
    for(var i=0; i<number.length - 2; i++){
        for(var j=i+1; j<number.length-1; j++){
            for(var k=j+1; k<number.length; k++){
                if(number[i]+number[j]+number[k] === 0) {
                    count++;
                }
            }
        }
    }
    return count;
}
