console.log( solution("3people unFollowed me") );

function solution(s) {
    return s.split(' ').map((data) => data.charAt(0).toUpperCase() + data.slice(1).toLowerCase()).join(" ");
}