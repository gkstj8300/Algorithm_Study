let result = solution("100", "123450");
console.log(result);

function solution(X, Y) {
    let x_arr = Array(10).fill(0);
    let y_arr = Array(10).fill(0);
    for(let i = 0; i < X.length; i++){
        x_arr[X[i]]++;
    }
    for(let i = 0; i < Y.length; i++){
        y_arr[Y[i]]++;
    }
    let result = "";
    for(let i = 0; i < x_arr.length; i++) {
        let compare = Math.min(x_arr[i], y_arr[i]);
        result += String(i).repeat(compare);
    }
    result = result.split('').sort((a, b) => b - a).join('');
    if(result !== '' && +result === 0) {
        return "0";
    }
    return result.length ? result : '-1';
}