/**
  Sliding Window
 */

function maxSubarraySum2(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  // 초기 윈도우 합
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  // 윈도우 이동하면서 앞은 빼고 뒤는 더함
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}


function maxSubarraySum(arr, num){
  if (arr.length < num) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null