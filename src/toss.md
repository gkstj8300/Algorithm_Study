### 서술형 참고

✅ 모범답안

1) 성능 문제의 주요 원인

• DOM 노드 과다: 1만 개 DOM 요소가 동시에 렌더링되어 메모리 사용량 급증
• 불필요한 리렌더링: 상위 컴포넌트 상태 변경 시 모든 아이템이 재렌더링
• 레이아웃 스래싱: 스크롤 시 지속적인 reflow/repaint 발생
2) React 대용량 리스트 최적화

가상화(Virtualization) 구현:
- react-window 또는 react-virtualized 사용
- 화면에 보이는 항목만 렌더링 (예: 20-30개)
- 스크롤 위치에 따라 동적으로 DOM 요소 생성/제거

컴포넌트 최적화:
- React.memo로 불필요한 리렌더링 방지
- useCallback으로 이벤트 핸들러 메모이제이션
- useMemo로 복잡한 계산 결과 캐싱

상태 관리 최적화:
- 지역 상태와 전역 상태 분리
- 상태 업데이트 배치 처리
3) 메모리 사용량 최적화

• 이미지 지연 로딩(Lazy Loading)
• 무한 스크롤 대신 페이지네이션 고려
• 불필요한 객체 참조 제거
• WeakMap 사용으로 메모리 누수 방지
4) 사용자 경험 개선

• 스켈레톤 UI로 로딩 상태 표시
• 검색/필터 기능으로 데이터 양 축소
• 프로그레시브 로딩(점진적 로딩)
• 스크롤 위치 유지 기능

2️⃣ 브라우저 렌더링 & 성능 문제
🔥 예상 문제

[상황]
웹 페이지 로딩 속도가 느려서 사용자 이탈률이 높습니다.
First Contentful Paint(FCP)가 4초, 
Largest Contentful Paint(LCP)가 6초로 측정되었습니다.

[질문들]
1) 로딩 성능 지표(FCP, LCP, CLS)를 설명하세요.
2) 초기 렌더링 속도를 개선하는 방법 5가지를 제시하세요.
3) 이미지 최적화 전략을 구체적으로 설명하세요.
4) 번들 크기 최적화 방안은?
✅ 모범답안

1) 성능 지표 설명

• FCP (First Contentful Paint): 첫 번째 콘텐츠가 화면에 표시되는 시간
  - 목표: 1.8초 이내
  - 사용자가 "페이지가 로딩되고 있다"고 인식하는 시점

• LCP (Largest Contentful Paint): 가장 큰 콘텐츠 요소가 렌더링되는 시간
  - 목표: 2.5초 이내
  - 페이지의 주요 콘텐츠가 로딩 완료되는 시점

• CLS (Cumulative Layout Shift): 예상치 못한 레이아웃 변화 정도
  - 목표: 0.1 이하
  - 페이지 안정성을 측정
2) 초기 렌더링 속도 개선

1. 코드 스플리팅(Code Splitting):
   - React.lazy()와 Suspense 활용
   - 라우트 기반 청크 분할
   - 동적 import() 사용

2. 서버사이드 렌더링(SSR):
   - Next.js 또는 Gatsby 활용
   - 초기 HTML 콘텐츠 즉시 제공
   - SEO 개선 효과

3. 리소스 우선순위 최적화:
   - Critical CSS 인라인 처리
   - 중요 리소스 preload
   - 비중요 리소스 defer/async

4. 브라우저 캐싱 활용:
   - HTTP 캐시 헤더 설정
   - Service Worker 구현
   - CDN 활용

5. 불필요한 렌더링 제거:
   - React.memo, useMemo 최적화
   - 조건부 렌더링 최적화
3) 이미지 최적화 전략

형식 최적화:
- WebP, AVIF 등 차세대 이미지 형식 사용
- 브라우저 지원에 따른 폴백 제공
- <picture> 태그로 반응형 이미지

크기 최적화:
- 적절한 해상도로 리사이징
- 디바이스별 최적 크기 제공
- 압축률 최적화 (품질 vs 용량)

로딩 최적화:
- 지연 로딩(Lazy Loading) 구현
- Intersection Observer API 활용
- 우선순위가 높은 이미지 preload

실제 구현:
<img 
  src="image-800w.webp"
  srcset="image-400w.webp 400w, image-800w.webp 800w"
  sizes="(max-width: 480px) 400px, 800px"
  loading="lazy"
  alt="description"
/>
4) 번들 크기 최적화

의존성 최적화:
- 번들 분석 도구 활용 (webpack-bundle-analyzer)
- Tree shaking으로 미사용 코드 제거
- 경량 라이브러리로 대체

코드 최적화:
- 중복 코드 제거 및 모듈화
- Polyfill 최적화 (필요한 브라우저만)
- Dynamic import로 필요 시점에 로딩

빌드 최적화:
- Webpack 설정 최적화
- 압축 및 minification
- 캐시 최적화를 위한 해시 사용
3️⃣ 상태 관리 & 데이터 플로우 문제
🔥 예상 문제

[상황]
복잡한 결제 플로우에서 여러 컴포넌트가 
사용자 정보, 결제 정보, 배송 정보를 공유해야 합니다.
Prop drilling 문제가 발생하고 상태 동기화가 어렵습니다.

[질문들]
1) Prop drilling 문제를 해결하는 방법을 3가지 제시하세요.
2) 전역 상태 관리 라이브러리 선택 기준을 설명하세요.
3) 비동기 상태 관리 전략을 제시하세요.
4) 상태 동기화 문제 해결 방안은?
✅ 모범답안

1) Prop drilling 해결 방법

1. Context API 활용:
const PaymentContext = createContext();
- 컴포넌트 트리 전체에 상태 공유
- useContext로 필요한 곳에서 접근
- Provider로 상태 범위 제한

2. 전역 상태 관리 도입:
- Redux Toolkit 또는 Zustand 사용
- 중앙화된 상태 관리
- 예측 가능한 상태 변화

3. 컴포넌트 구조 개선:
- Compound Component 패턴
- Render Props 패턴
- Custom Hooks로 로직 분리
2) 전역 상태 관리 라이브러리 선택 기준

프로젝트 규모별 선택:
소규모: Context API + useReducer
중규모: Zustand (간단한 API, 작은 번들 크기)
대규모: Redux Toolkit (예측 가능성, 디버깅 도구)

고려 사항:
- 학습 곡선의 완만함
- 번들 크기 영향
- TypeScript 지원 수준
- 개발자 도구 지원
- 팀의 숙련도
3) 비동기 상태 관리

React Query/SWR 활용:
- 서버 상태와 클라이언트 상태 분리
- 자동 캐싱 및 재검증
- 낙관적 업데이트 지원

에러 처리:
- Error Boundary로 에러 격리
- 재시도 로직 구현
- 사용자 친화적 에러 메시지

로딩 상태 관리:
- Suspense를 활용한 선언적 로딩 처리
- 스켈레톤 UI 제공
- Progressive Enhancement

4️⃣ 웹 접근성 & 사용자 경험 문제
🔥 예상 문제

[상황]
시각 장애인 사용자가 스크린 리더로 
웹사이트를 이용할 때 접근성 문제가 발생합니다.
또한 모바일 사용자의 터치 조작이 어렵다는 피드백이 있습니다.

[질문들]
1) 웹 접근성(WCAG) 주요 원칙을 설명하세요.
2) 스크린 리더 사용자를 위한 개선 방안은?
3) 모바일 터치 접근성 개선 방법은?
4) 접근성 테스트 방법을 제시하세요.
✅ 모범답안

1) WCAG 주요 원칙

1. 인식 가능성(Perceivable):
- 이미지에 대체 텍스트 제공
- 색상만으로 정보를 전달하지 않음
- 충분한 색상 대비 (4.5:1 이상)

2. 조작 가능성(Operable):
- 키보드만으로 모든 기능 사용 가능
- 충분한 시간 제공
- 발작을 일으킬 수 있는 콘텐츠 방지

3. 이해 가능성(Understandable):
- 명확하고 간단한 언어 사용
- 일관된 내비게이션
- 오류 방지 및 안내

4. 견고성(Robust):
- 다양한 보조 기술과 호환
- 유효한 HTML 마크업
- 의미론적 구조 사용
2) 스크린 리더 개선 방안

시맨틱 HTML 사용:
<main>, <nav>, <article>, <section> 등
의미있는 구조로 페이지 구성

ARIA 속성 활용:
- aria-label: 요소에 명확한 레이블 제공
- aria-describedby: 추가 설명 연결
- role: 요소의 역할 명시
- aria-live: 동적 콘텐츠 변화 알림

포커스 관리:
- 논리적인 탭 순서 구현
- 포커스 표시 명확히 제공
- Skip Link로 주요 콘텐츠 바로가기

실제 구현:
<button 
  aria-label="장바구니에 상품 추가"
  aria-describedby="product-info"
  onClick={addToCart}
>
  <ShoppingCartIcon aria-hidden="true" />
  담기
</button>
3) 모바일 터치 접근성

터치 타겟 크기:
- 최소 44x44px (iOS), 48x48dp (Android)
- 충분한 간격으로 오터치 방지

제스처 개선:
- 대체 조작 방법 제공
- 복잡한 제스처 단순화
- 실수 방지를 위한 확인 단계

반응성 개선:
- 터치 피드백 즉시 제공
- 적절한 애니메이션 활용
- 로딩 상태 명확히 표시

📝 예상 서술형 문제 유형
1️⃣ 성능 최적화 문제
🔥 문제 예시

당신이 개발한 React 애플리케이션에서 사용자들이 "페이지가 느리다"는 
피드백을 받았습니다. Chrome DevTools로 확인해보니 다음과 같은 
상황을 발견했습니다:

- 첫 페이지 로딩 시간: 5초
- JavaScript 번들 크기: 3MB
- 특정 컴포넌트에서 렌더링이 자주 발생

1) 이런 성능 문제의 주요 원인 3가지를 설명하세요.
2) 각 원인에 대한 해결 방안을 구체적으로 제시하세요.
3) 성능 개선 효과를 어떻게 측정하고 검증할 것인지 설명하세요.
✅ 답변 예시

1) 주요 원인 분석:
• 번들 크기 과대: 모든 라이브러리를 한 번에 로딩 (3MB)
• 불필요한 리렌더링: 상위 컴포넌트 상태 변경 시 하위 컴포넌트 전체 렌더링
• 초기 로딩 최적화 부족: Critical CSS 미적용, 이미지 최적화 부족

2) 해결 방안:
번들 최적화:
- Code Splitting으로 페이지별 청크 분리
- Tree Shaking으로 미사용 코드 제거
- 라이브러리 경량화 (moment.js → date-fns)

렌더링 최적화:
- React.memo로 불필요한 렌더링 방지
- useCallback/useMemo로 함수/값 메모이제이션
- 상태를 컴포넌트별로 세분화하여 리렌더링 범위 축소

로딩 최적화:
- 이미지 lazy loading 및 WebP 형식 사용
- Critical CSS 인라인 처리
- Service Worker를 통한 캐싱 전략

3) 성능 측정:
- Lighthouse 점수 개선 목표: 50 → 85점
- Core Web Vitals 모니터링 (LCP, FID, CLS)
- 실제 사용자 데이터 수집을 위한 RUM 도구 도입
2️⃣ API 설계 및 에러 처리
🔥 문제 예시

결제 기능을 개발하던 중 다음과 같은 문제들이 발생했습니다:

- 네트워크 불안정으로 API 호출 실패가 빈번함
- 사용자가 결제 버튼을 여러 번 클릭하여 중복 결제 발생
- 결제 중 페이지를 벗어났다가 돌아오면 상태가 불일치

1) 각 문제의 근본 원인을 분석하고 해결책을 제시하세요.
2) 안전하고 신뢰할 수 있는 결제 플로우를 설계하세요.
3) 사용자 경험을 해치지 않으면서 에러를 처리하는 방법은?
✅ 답변 예시

1) 원인 분석 및 해결책:

네트워크 불안정:
원인: 재시도 로직 없음, 타임아웃 설정 부적절
해결: 
- Exponential Backoff 재시도 (1초, 2초, 4초)
- Circuit Breaker 패턴으로 과도한 재시도 방지

중복 결제:
원인: 클라이언트 측 중복 요청 방지 부족
해결:
- 멱등키(Idempotency Key) 사용
- 버튼 비활성화 및 로딩 상태 표시
- 서버 측 중복 요청 검증

상태 불일치:
원인: 브라우저 세션 관리 미비
해결:
- 결제 상태를 서버에서 관리
- 페이지 복귀 시 상태 동기화 API 호출
- LocalStorage/SessionStorage 활용한 임시 상태 보관

2) 안전한 결제 플로우:
① 결제 요청 생성 (서버에서 고유 ID 발급)
② 클라이언트 유효성 검사
③ 결제 실행 (멱등키 포함)
④ 결제 결과 확인 (폴링 또는 웹소켓)
⑤ 최종 상태 업데이트

3) 사용자 친화적 에러 처리:
- 진행률 표시로 사용자 안심시키기
- 구체적이고 실행 가능한 에러 메시지
- 자동 복구 시도 중임을 알리기
- 고객센터 연락처 등 대안 제시
3️⃣ 상태 관리 및 아키텍처
🔥 문제 예시

팀에서 개발 중인 대시보드 앱이 점점 복잡해지면서 
다음과 같은 문제들이 발생했습니다:

- 컴포넌트 간 데이터 전달을 위한 props drilling
- 같은 API 데이터를 여러 컴포넌트에서 중복 호출
- 사용자 액션에 따른 상태 변화 추적의 어려움

1) 현재 상태 관리의 문제점을 분석하세요.
2) 적절한 상태 관리 솔루션을 선택하고 이유를 설명하세요.
3) 데이터 플로우를 개선하는 구체적인 방법을 제시하세요.
✅ 답변 예시

1) 문제점 분석:
• Props Drilling: 중간 컴포넌트들이 불필요한 props 전달 역할
• 데이터 중복: 각 컴포넌트마다 독립적으로 API 호출
• 상태 파편화: 관련된 상태들이 여러 곳에 분산 저장
• 사이드 이펙트 관리 어려움: 비동기 작업의 로딩/에러 상태 추적 복잡

2) 상태 관리 솔루션 선택:
선택: React Query + Zustand 조합

React Query 선택 이유:
- 서버 상태와 클라이언트 상태 명확히 분리
- 자동 캐싱, 백그라운드 업데이트, 재시도 기능
- 로딩/에러 상태 자동 관리

Zustand 선택 이유:
- 간단한 API, 낮은 학습 비용
- TypeScript 지원 우수
- 불필요한 보일러플레이트 없음

3) 데이터 플로우 개선:
구조 개편:
- 서버 상태: React Query로 일원화
- 클라이언트 상태: Zustand store에 도메인별 분리
- UI 상태: 각 컴포넌트 내 useState 유지

캐싱 전략:
- 자주 사용되는 데이터: staleTime 30분
- 실시간성 중요한 데이터: refetchInterval 설정
- 사용자 액션 기반 무효화 정책 수립

실제 구현:
// API 계층
const useUserData = () => useQuery(['user'], fetchUser);

// 전역 상태
const useAppStore = create((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme })
}));
4️⃣ 크로스 브라우저 및 디바이스 대응
🔥 문제 예시

개발한 웹 앱을 QA 테스트하면서 다음과 같은 이슈들이 발견되었습니다:

- Safari에서만 CSS Grid 레이아웃이 깨짐
- IE11에서 JavaScript 에러로 앱이 실행되지 않음  
- 모바일에서 터치 스크롤이 부자연스러움
- iPhone에서 100vh 높이가 의도와 다르게 표시됨

1) 각 브라우저별 문제의 원인을 설명하세요.
2) 호환성 문제를 해결하는 방법을 제시하세요.
3) 향후 이런 문제를 예방하는 개발 프로세스를 제안하세요.
✅ 답변 예시

1) 브라우저별 문제 원인:

Safari CSS Grid:
- 구버전 Safari의 Grid 구현체 차이
- -webkit- prefix 누락
- minmax() 함수 지원 차이

IE11 JavaScript 에러:
- ES6+ 문법 미지원 (화살표 함수, const/let 등)
- Promise, fetch API 미지원
- Object.assign, Array.from 등 메서드 부족

모바일 터치 스크롤:
- -webkit-overflow-scrolling: touch 미적용
- 관성 스크롤 부족
- touch-action 속성 설정 부족

iPhone 100vh 문제:
- 모바일 브라우저의 동적 뷰포트 문제
- 주소창/탭바 높이 변화로 100vh 계산 오류

2) 해결 방법:

Safari Grid 이슈:
- autoprefixer 사용으로 vendor prefix 자동 추가
- 대체 레이아웃 (flexbox) 제공
- @supports 규칙으로 기능 탐지

IE11 호환성:
- Babel 트랜스파일링 설정
- core-js polyfill 추가
- browserslist 설정으로 타겟 브라우저 명시

모바일 스크롤:
css
.scroll-container {
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  overscroll-behavior: contain;
}

iPhone 뷰포트:
javascript
// CSS Custom Properties 활용
function setVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

3) 예방 프로세스:
개발 환경:
- BrowserStack 등 크로스브라우저 테스트 도구 도입
- 다양한 디바이스 테스트 자동화
- CI/CD에 호환성 체크 단계 포함

코드 품질:
- ESLint에 브라우저 호환성 규칙 추가
- Stylelint로 CSS 호환성 검사
- 코드 리뷰 시 브라우저 지원 범위 확인

테스트 전략:
- 주요 브라우저별 스모크 테스트 자동화
- 디바이스별 시각적 회귀 테스트
- 성능 테스트에 다양한 환경 포함
5️⃣ 보안 및 사용자 데이터 보호
🔥 문제 예시

금융 서비스 특성상 보안이 매우 중요한 프로젝트를 진행 중입니다.
코드 리뷰에서 다음과 같은 보안 이슈들이 지적되었습니다:

- 사용자 토큰을 localStorage에 저장
- API 응답 데이터를 그대로 DOM에 출력
- HTTPS가 아닌 HTTP로 API 통신
- 사용자 입력값 검증 부족

1) 각 이슈의 보안 위험도를 평가하세요.
2) 프론트엔드에서 적용할 수 있는 보안 대책을 제시하세요.
3) 보안 점검을 위한 체크리스트를 작성하세요.


### 코테 참고

✅ 토스 실무형 테스트

- 실제 개발 현장에서 마주할 수 있는 상황
- 비즈니스 로직 구현
- API 통신, 데이터 처리
- 예외 케이스 핸들링
- 사용자 시나리오 기반 문제
- "실무 문제 해결 능력"을 묻는 문제
📝 "실무에서 볼법한 문제"의 실제 예시
🎯 전형적인 실무 상황들
1️⃣ API 통신 & 에러 처리

Copy// 예시: 결제 API 호출 시 네트워크 오류 처리
// "API 호출이 실패할 때 재시도 로직을 구현하세요"
// → 실제로 결제 시스템에서 자주 마주치는 상황
2️⃣ 데이터 가공 & 변환

Copy// 예시: 사용자 거래 내역을 월별로 그룹핑
// "거래 데이터 배열을 받아 월별 지출 요약을 만드세요"
// → 실제로 가계부 앱에서 필요한 로직
3️⃣ 상태 관리 & 동시성 제어

Copy// 예시: 중복 클릭 방지 로직
// "버튼 중복 클릭 시 API가 여러 번 호출되지 않도록 하세요"
// → 실제로 모든 웹 서비스에서 필요한 기능
4️⃣ 사용자 경험 개선

Copy// 예시: 검색 기능 최적화
// "사용자가 타이핑할 때마다 API 요청하지 말고 적절히 debounce하세요"
// → 실제로 검색 기능 개발 시 반드시 고려하는 사항


📝 문제 1: 중복 API 호출 방지
🔥 문제
Copy/**
 * 버튼을 연속으로 클릭해도 API가 한 번만 호출되도록 하는 함수를 작성하세요.
 * 
 * 함수명: createThrottledApiCall
 * 매개변수: apiFunction (Promise를 반환하는 함수)
 * 반환값: throttled된 함수
 * 
 * 조건:
 * - API 호출이 진행 중일 때는 추가 호출 무시
 * - API 응답이 완료되면 다시 호출 가능
 * - 에러가 발생해도 다시 호출 가능하도록 상태 초기화
 */

// 예시 사용법:
// const throttledTransfer = createThrottledApiCall(() => fetch('/api/transfer'));
// button.onclick = throttledTransfer; // 연속 클릭해도 한 번만 실행
✅ 해답
function createThrottledApiCall(apiFunction) {
    let isLoading = false;
    
    return async function(...args) {
        // 이미 호출 중이면 무시
        if (isLoading) {
            console.log('API 호출 중입니다. 잠시 후 다시 시도하세요.');
            return;
        }
        
        try {
            isLoading = true;
            const result = await apiFunction.apply(this, args);
            return result;
        } catch (error) {
            throw error;
        } finally {
            // 성공/실패 관계없이 상태 초기화
            isLoading = false;
        }
    };
}
📝 문제 2: 검색어 자동완성 Debounce
🔥 문제
Copy/**
 * 사용자가 입력할 때마다 검색 API를 호출하는 대신,
 * 입력이 멈춘 후 300ms 뒤에 한 번만 호출되도록 하는 함수를 작성하세요.
 * 
 * 함수명: createDebouncedSearch
 * 매개변수: searchFunction, delay (기본값 300ms)
 * 반환값: debounced된 검색 함수
 * 
 * 조건:
 * - 이전 타이머가 있으면 취소하고 새로 시작
 * - 빈 문자열이면 함수 호출하지 않음
 * - 같은 검색어 연속 입력 시에도 중복 호출 방지
 */

// 예시 사용법:
// const debouncedSearch = createDebouncedSearch((query) => {
//   return fetch(`/api/search?q=${query}`);
// });
// 
// input.oninput = (e) => debouncedSearch(e.target.value);
✅ 해답
function createDebouncedSearch(searchFunction, delay = 300) {
    let timerId = null;
    let lastQuery = '';
    
    return function(query) {
        // 이전 타이머 취소
        if (timerId) {
            clearTimeout(timerId);
        }
        
        // 빈 문자열 처리
        if (!query || query.trim() === '') {
            lastQuery = '';
            return;
        }
        
        // 같은 검색어 중복 방지
        if (query === lastQuery) {
            return;
        }
        
        // 새 타이머 설정
        timerId = setTimeout(() => {
            lastQuery = query;
            searchFunction(query);
            timerId = null;
        }, delay);
    };
}
📝 문제 3: 거래 내역 필터링
🔥 문제
/**
 * 거래 내역 배열에서 조건에 맞는 거래만 필터링하는 함수를 작성하세요.
 * 
 * 함수명: filterTransactions
 * 매개변수: transactions (거래 배열), filters (필터 객체)
 * 반환값: 필터링된 거래 배열
 * 
 * 거래 객체 구조:
 * {
 *   id: string,
 *   type: 'send' | 'receive',
 *   amount: number,
 *   date: string (YYYY-MM-DD),
 *   description: string
 * }
 * 
 * 필터 객체 구조:
 * {
 *   type?: 'send' | 'receive',
 *   minAmount?: number,
 *   maxAmount?: number,
 *   startDate?: string,
 *   endDate?: string,
 *   keyword?: string (description에서 검색)
 * }
 */

const transactions = [
  { id: '1', type: 'send', amount: 10000, date: '2024-01-15', description: '카페 결제' },
  { id: '2', type: 'receive', amount: 50000, date: '2024-01-16', description: '용돈' },
  { id: '3', type: 'send', amount: 25000, date: '2024-01-17', description: '온라인 쇼핑' }
];

// 예시: filterTransactions(transactions, { type: 'send', minAmount: 20000 })
// 결과: [{ id: '3', type: 'send', amount: 25000, ... }]
✅ 해답
Copyfunction filterTransactions(transactions, filters = {}) {
    return transactions.filter(transaction => {
        // 거래 타입 필터
        if (filters.type && transaction.type !== filters.type) {
            return false;
        }
        
        // 최소 금액 필터
        if (filters.minAmount !== undefined && transaction.amount < filters.minAmount) {
            return false;
        }
        
        // 최대 금액 필터
        if (filters.maxAmount !== undefined && transaction.amount > filters.maxAmount) {
            return false;
        }
        
        // 시작 날짜 필터
        if (filters.startDate && transaction.date < filters.startDate) {
            return false;
        }
        
        // 종료 날짜 필터
        if (filters.endDate && transaction.date > filters.endDate) {
            return false;
        }
        
        // 키워드 필터 (설명에서 검색)
        if (filters.keyword) {
            const keyword = filters.keyword.toLowerCase();
            const description = transaction.description.toLowerCase();
            if (!description.includes(keyword)) {
                return false;
            }
        }
        
        return true;
    });
}
📝 문제 4: 폼 유효성 검사
🔥 문제
Copy/**
 * 송금 폼의 유효성을 검사하는 함수를 작성하세요.
 * 
 * 함수명: validateTransferForm
 * 매개변수: formData (폼 데이터 객체)
 * 반환값: { isValid: boolean, errors: string[] }
 * 
 * 폼 데이터 구조:
 * {
 *   recipient: string, // 받는 사람
 *   amount: string,    // 송금 금액
 *   password: string   // 비밀번호
 * }
 * 
 * 유효성 규칙:
 * 1. recipient: 2~10글자, 한글만 허용
 * 2. amount: 1000원 이상 1000만원 이하, 숫자만
 * 3. password: 6자리 숫자
 */

// 예시 사용:
// validateTransferForm({
//   recipient: '김토스',
//   amount: '50000',
//   password: '123456'
// })
// 결과: { isValid: true, errors: [] }
✅ 해답
Copyfunction validateTransferForm(formData) {
    const errors = [];
    
    // 받는 사람 유효성 검사
    if (!formData.recipient) {
        errors.push('받는 사람을 입력해주세요.');
    } else {
        const koreanRegex = /^[가-힣]{2,10}$/;
        if (!koreanRegex.test(formData.recipient)) {
            errors.push('받는 사람은 2~10글자의 한글만 입력 가능합니다.');
        }
    }
    
    // 송금 금액 유효성 검사
    if (!formData.amount) {
        errors.push('송금 금액을 입력해주세요.');
    } else {
        const amount = parseInt(formData.amount);
        
        // 숫자가 아닌 경우
        if (isNaN(amount) || formData.amount !== amount.toString()) {
            errors.push('송금 금액은 숫자만 입력 가능합니다.');
        } 
        // 범위 검사
        else if (amount < 1000) {
            errors.push('송금 금액은 1,000원 이상이어야 합니다.');
        } else if (amount > 10000000) {
            errors.push('송금 금액은 1,000만원 이하여야 합니다.');
        }
    }
    
    // 비밀번호 유효성 검사
    if (!formData.password) {
        errors.push('비밀번호를 입력해주세요.');
    } else {
        const passwordRegex = /^\d{6}$/;
        if (!passwordRegex.test(formData.password)) {
            errors.push('비밀번호는 6자리 숫자여야 합니다.');
        }
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}
📝 문제 5: 금액 포맷팅
🔥 문제
Copy/**
 * 숫자를 한국 통화 형식으로 포맷팅하는 함수를 작성하세요.
 * 
 * 함수명: formatCurrency
 * 매개변수: amount (숫자 또는 문자열), options (옵션 객체)
 * 반환값: 포맷팅된 문자열
 * 
 * 옵션:
 * {
 *   showUnit: boolean,  // '원' 단위 표시 여부 (기본값: true)
 *   showSign: boolean   // +/- 부호 표시 여부 (기본값: false)  
 * }
 * 
 * 예시:
 * formatCurrency(1234567) → "1,234,567원"
 * formatCurrency(-50000, { showSign: true }) → "-50,000원"
 * formatCurrency(10000, { showUnit: false }) → "10,000"
 */
✅ 해답
Copyfunction formatCurrency(amount, options = {}) {
    // 기본 옵션 설정
    const defaultOptions = {
        showUnit: true,
        showSign: false
    };
    
    const opts = { ...defaultOptions, ...options };
    
    // 숫자로 변환
    const numAmount = typeof amount === 'string' ? parseInt(amount) : amount;
    
    // 유효하지 않은 숫자 처리
    if (isNaN(numAmount)) {
        return '0원';
    }
    
    // 절댓값으로 천 단위 구분자 추가
    const absAmount = Math.abs(numAmount);
    const formattedAmount = absAmount.toLocaleString('ko-KR');
    
    // 결과 문자열 생성
    let result = '';
    
    // 부호 처리
    if (opts.showSign || numAmount < 0) {
        if (numAmount > 0) {
            result += '+';
        } else if (numAmount < 0) {
            result += '-';
        }
    }
    
    // 금액 추가
    result += formattedAmount;
    
    // 단위 추가
    if (opts.showUnit) {
        result += '원';
    }
    
    return result;
}