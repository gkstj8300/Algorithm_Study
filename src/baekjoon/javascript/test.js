// const [a] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
const [a] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let [b, c] = a.split(' ').map(Number);
let result = [];
for(let i = b; i <= c; i++){
    if(isPrime(i)){
        result.push(i);
    }
}


console.log(result.join('\n'));

function isPrime(n) {
    if(n === 2) return true;
    if(n < 2 || n % 2 === 0) return false
    for(let i = 2; i <= parseInt(Math.sqrt(n)); i++){
        if(n % i === 0) return false;
    }
    return true;
}


// 7
// 23
// 101
/**
 * ヘッダー
 */
// export const Header: React.VFC<Props> = ({}) => {
// 	const router = useRouter();
// 	const [isOverlay, setIsOverlay] = useState(false);

// 	// TODO: 本来は app から props で受けたいが、mobile にも影響がありそうなので雑に実装
// 	const pathIsHome = router.pathname === '/';
// 	const pathIsResult = router.pathname === '/vona2/result';
// 	const { Keyword, KWSearch } = router.query;
// 	const keyword =
// 		(Array.isArray(Keyword) ? Keyword[Keyword.length - 1] : Keyword) ||
// 		(Array.isArray(KWSearch) ? KWSearch[KWSearch.length - 1] : KWSearch);

// 	return (
// 		<>
// 			<header className={styles.header} data-sticky-enabled={pathIsHome}>
// 				<NoSupportBrowserMessage />
// 				<div className={styles.contentsWrapper}>
// 					<div className={styles.contents}>
// 						<div className={styles.main}>
// 							<Logo needsHeading={pathIsHome} />
// 							<div className={styles.searchBoxWrapper}>
// 								<div className={styles.megaNavWrapper}>
// 									<MegaNavMenu />
// 								</div>
// 								<SearchBox
// 									keyword={keyword}
// 									isReSearch={pathIsResult}
// 									setIsOverlay={setIsOverlay}
// 								/>
// 							</div>
// 						</div>
// 						<div className={styles.aside}>
// 							<AsideNavs />
// 						</div>
// 					</div>
// 				</div>
// 			</header>
// 			<div className={isOverlay ? styles.hasSuggestOverlay : ''} />
// 		</>
// 	);
// };




























/*
M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다.
 (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

출력
한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.

예제 입력 1 
3 16
예제 출력 1 
3
5
7
11
13
*/

