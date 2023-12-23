let result = solution([3,1,2,3]);
console.log(result);

function solution(nums) {
    const n = nums.length/2;
    let resultSet = new Set(nums);
    return resultSet.size < n ? resultSet.size : n;
}