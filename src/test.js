/**
한 번에 하나씩 [큐(Queue) 패턴과 Promise 체이닝을 활용한 동시성 제어]

토스페이먼츠의 프론트엔드 개발자인 김토스는 웹 서비스와 백엔드 API를 연동하고 있습니다. 그런데 연동 대상 백엔드 API는 보안이 매우 중요한 API라서 특별한 규칙을 만들기로 했습니다. 그 규칙이란 모든 요청에 대해 직전 API가 반환하는 토큰을 요구하는 것입니다.

자세한 규칙은 다음과 같습니다.

1. 첫 번째 API 요청은 무조건 성공, 응답으로 result 와 token 을 반환
2. 두 번째 요청은 첫 번째 요청에서 반환된 token 을 요청에 실어 전송, 마찬가지로 result 와 token 을 반환.
3. 세 번째, 네 번째 요청을 포함해 이후 모든 요청은 직전 요청에 대한 응답의 token 을 전송,
4. 첫 번째 요청을 제외하면, 직전 요청에 반환된 token 을 전송하지 않은 경우 오류.

김토스는 이 문제를 효과적으로 해결하기 위해서 규칙을 알아서 처리하는 함수를 작성하려고 합니다.

문제
동시에 여러 번 호출되어도 규칙에 따라 토큰과 함께 순차적으로 요청하는 solution 함수를 작성하세요.

조건
solution 함수의 인자로 API를 호출하는 callAPI 함수가 주어집니다.
• solution 함수를 실행하는 것을 [요청] 으로 정의합니다.
• callAPI 함수를 실행하는 것을 [API 호출] 으로 정의합니다.
• callAPI 함수가 반환하는 Promise 가 성공(fulfill)하는 것을 [응답] 으로 정의합니다.
• callAPI 함수는 응답값 result 와 다음 요청에서 사용할 수 있는 token 을 객체로 반환합니다.

유의 사항
• callAPI 함수를 직접 변경할 수 없습니다.
• callAPI 함수가 실패하는 경우는 생각하지 않습니다.
•  위에서 주어진 조건을 만족하는 한, 임의의 순서와 간격으로 solution 함수가 호출될 수 있습니다.

*/

function solution(callAPI) {
    let currentPromise = Promise.resolve(); // 초기 Promise
    let currentToken = null; // 현재 토큰 상태

    return async function () {
        // 새로운 Promise를 체인에 연결
        const promise = currentPromise.then(async () => {
            // API 호출 (첫 번째 요청이면 token은 undefined)
            const response = await callAPI(currentToken);

            // 다음 요청을 위해 토큰 업데이트
            currentToken = response.token;

            // result 반환
            return response.result;
        });

        // 현재 Promise 체인 업데이트
        currentPromise = promise.catch(() => { }); // 에러가 발생해도 체인이 끊어지지 않도록

        return promise;
    };
}