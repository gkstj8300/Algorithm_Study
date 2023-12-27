console.log( solution("BCBdbe", "B") );

function solution(my_string, letter) {
    return my_string.split('').filter((data) => data != letter).join('');
}