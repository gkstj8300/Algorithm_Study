let result = solution(5,[5,2],[2,3]); // 3, 4, 5  // 1, 4, 5
console.log(result);

function solution(n, lost, reserve) {

    let arr = Array(n).fill(true);

    let lostSet = new Set(lost);
    for(let i = 0; i < reserve.length; i++) {
        lostSet.delete(reserve[i]);
    }

    let reserveSet = new Set(reserve);
    for(let i = 0; i < lost.length; i++) {
        reserveSet.delete(lost[i]);
    }

    let lostArr = [...lostSet];
    let resultArr = [...reserveSet];

    for(let i = 0; i < lostArr.length; i++) {
        arr[lostArr[i]-1] = false;
    }
    
    for(let i = 0; i < resultArr.length; i++) {
        let before = resultArr[i]-1; 
        let after = resultArr[i]+1;
        if(!arr[before-1] && before-1 >= 0){
            arr[before-1] = true;
        } else if(!arr[after-1] && after <= arr.length) {
            arr[after-1] = true;
        }
    }
    let result = arr.filter((data) => data == true).length;
    return result
}