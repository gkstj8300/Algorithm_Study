// const [a, ...b] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a, ...b] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const coin = {
    Quarter: 25,
    Dime: 10,
    Nickel: 5,
    Penny: 1
};

let result = solution(b, coin);
// console.log(result);

function solution(b, coin) {
    b = b.map(Number);
    let arr = [];
    let num = 0;
    b.map((data, idx) => {
        arr[idx] = [];
        arr[idx].push(Math.floor(data/coin.Quarter));
        num = data-coin.Quarter*Math.floor(data/coin.Quarter);
        
        arr[idx].push(Math.floor(num/coin.Dime));
        num = num-coin.Dime*Math.floor(num/coin.Dime);
        
        arr[idx].push(Math.floor(num/coin.Nickel));
        num = data-coin.Nickel*Math.floor(data/coin.Nickel);

        arr[idx].push(Math.floor(num/coin.Penny));
        num = data-coin.Penny*Math.floor(data/coin.Penny);
    })
    arr.forEach((data) => {
        console.log(data.join(' '));
    });
}