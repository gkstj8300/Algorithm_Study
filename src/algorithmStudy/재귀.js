// 헬퍼 메소드 재귀
function collectOddValues(arr) {

  let result = [];

  function helper(helperInput) {

    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }

    helper(helperInput.slice(1))
  }

  helper(arr)

  return result;
}

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));


// 순수 재귀
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

// console.log(collectOddValues([1,2,3,4,5]));



/**
※ 연습문제 1

밑과 지수를 받아들이는 power라는 함수를 작성합니다. 
이 함수는 밑의 거듭제곱을 지수로 반환해야 합니다. 
이 함수는 Math.pow()의 기능을 모방해야 합니다. 
음의 밑과 지수에 대해서는 신경쓰지 마세요.

power(2,0) // 1
power(2,2) // 4
power(2,4) // 16

 */

function power(a, b) {
  if (b === 0) return 1;
  return a * power(a, b - 1);
}

/**
※ 연습문제 2

숫자를 받아 해당 숫자의 계승(팩토리얼)을 반환하는 팩토리얼 함수를 작성하시오.
팩토리얼은 정수와 그 아래의 모든 정수의 곱입니다.
예를 들어, 4 팩토리얼 (4!)은 4 * 3 * 2 * 1 = 2입니다. 팩토리얼 0(0!)은 항상 1입니다.

factorial(1) // 1
factorial(2) // 2
factorial(4) // 24
factorial(7) // 5040
 */

function factorial(n) {
  if (n <= 0) return 1;
  return n * factorial(n - 1);
}


/**
※ 연습문제 3

숫자 배열을 받아 모든 숫자의 곱을 반환하는 productOfArray라는 함수를 작성하시오.

productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60
 */

function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

/**
※ 연습문제 4

숫자를 받으면 0부터 함수에 전달된 숫자까지의 모든 숫자를 더하는 recursiveRange라는 함수를 작성하시오.

// recursiveRange(6) // 21
// recursiveRange(10) // 55 
 */

function recursiveRange(n){
    if (n <= 1) return 1
    return n + recursiveRange(n - 1);
}


/**
※ 연습문제 5

숫자를 받아 피보나치 수열의 n번째 숫자를 반환하는 
fib라는 재귀 함수를 작성하시오. 피보나치 수열은 
1, 1로 시작하는 1, 1, 2, 3, 5, 8, ...의 정수의 수열이며, 
모든 수는 이전 두 수의 합과 같다는 것을 명심하세요.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
 */
