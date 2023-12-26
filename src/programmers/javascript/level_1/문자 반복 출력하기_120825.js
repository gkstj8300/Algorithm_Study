console.log( solution("hello" ,3) )

function solution(my_string, n) {
    let arr = [];
    my_string.split('').forEach((data) => {
        for(let i = 0; i < n; i++) {
            arr.push(data)
        }
    })
    return arr.join('');
}