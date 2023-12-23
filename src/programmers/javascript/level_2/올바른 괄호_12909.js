console.log( solution("(()(") );

function solution(s){
    let arr = s.split("");
    if(arr[0] === ")") return false;
    let check = [];
    for(let bar of arr) {
        if(bar === "(") {
            check.push("(");
        } else if(bar === ")") {
            check.pop();
        }
    }
    return check.length === 0 ? true : false;
}