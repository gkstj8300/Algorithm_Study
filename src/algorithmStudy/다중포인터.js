/**
  다중포인터
  
  기존에 반복문 2번에 거쳐서 나올 수 있는 값을 O(N) 처리를 위한
  두개의 포인터를 기준으로 아웃풋을 찾는 것

  프로그래머스
  https://school.programmers.co.kr/learn/courses/30/lessons/42885
 */

function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
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

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;

    if (avg === num) {
      return true;
    } else if (avg < num) {
      start++;
    } else {
      end--;
    }
  }

  return false;
}

// averagePair([1, 2, 3], 2.5) // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
// averagePair([], 4) // false

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if(str1[i] === str2[j]) {
      i++;
    }

    if(i === str1.length) {
      return true;
    }

    j++;
  }

  return false;
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false 
