let result = solution([1,1,3,3,0,1,1]);
// console.log(result)

function solution(arr){
    // console.log(Math.abs(3));
    // console.log(Math.abs(3.23));
    // console.log(Math.round(3));
    // console.log(Math.ceil(3));
    // console.log(Math.floor(3));
    // console.log(Math.sqrt(3));
    // console.log(Math.cbrt(3));
    // console.log(Math.random(3));
    // console.log(Math.pow(3, 4));
    // console.log(Math.min(...arr));
    // console.log(Math.max(...arr));
    // console.log(arr.indexOf(3))
    console.log(arr.filter((data, idx) => {
        arr.indexOf(idx)
    }));
}

