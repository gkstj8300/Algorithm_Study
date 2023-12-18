let result = solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]);
console.log(result);

function solution(cards1, cards2, goal) {
    let arr = [];
    let x = 0, y = 0, i = 0;
    let flag = true;
    while(arr.length < goal.length) {
        if(cards1[x] === goal[i]) {
            arr.push(cards1[x]);
            flag = false;
            x++;
        } else if(cards2[y] === goal[i]) {
            arr.push(cards2[y]);
            flag = true;
            y++
        }
        i++;       
    }
    return arr.join(" ") === goal.join(" ") ? "Yes" : "No";
}