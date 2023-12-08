const [p, ...n] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [p, ...n] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let a = n.map((data) => Number(data));

let result = [];
result.push(Math.round(a.reduce((acc, data) => {return acc += data})/a.length));
result.push(a.sort((a, b) => a - b)[Math.floor(a.length/2)]);
let resultMap = new Map();
a.forEach((data) => {
    if(resultMap.has(data)){
        resultMap.set(data, resultMap.get(data) + 1);
    } else {
        resultMap.set(data, 1);
    }
})
let maxNum = Math.max(...Array.from(resultMap.values()));
let maxArr = [];
for(let [key, value] of resultMap){
    if(value === maxNum){
        maxArr.push(key);
    }
}
result.push(maxArr.length === 1 ? maxArr[0] : maxArr[1]);
result.push(Math.max(...a) - Math.min(...a));

console.log(result.join('\n'));

// const map = new Map();
// let max = 1;
// for (let number of numbers) {
//   if (map.has(number)) {
//     max = Math.max(max, map.get(number) + 1);
//     map.set(number, map.get(number) + 1);
//   } else map.set(number, 1);
// }

// const maxArr = [];
// for (let [key, val] of map) {
//   if (val === max) maxArr.push(key);
// }

// a.filter((data, idx) => a.indexOf(data) != idx)
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
// 1 3
// 1 2 3 4 6 8 12 24













/*
사람들이 만난 기록이 시간 순서대로 
$N$개 주어진다. (총총이는 토끼이지만 이 문제에서는 편의상 사람이라고 가정한다.)

무지개 댄스를 추지 않고 있던 사람이 무지개 댄스를 추고 있던 
사람을 만나게 된다면, 만난 시점 이후로 무지개 댄스를 추게 된다.

기록이 시작되기 이전 무지개 댄스를 추고 있는 사람은 총총이 뿐이라고 할 때, 
마지막 기록 이후 무지개 댄스를 추는 사람이 몇 명인지 구해보자!

입력
첫번째 줄에는 사람들이 만난 기록의 수 
$N\ (1 \le N \le 1\ 000)$이 주어진다.

두번째 줄부터 
$N$개의 줄에 걸쳐 사람들이 만난 기록이 주어진다. 
$i + 1$번째 줄에는 
$i$번째로 만난 사람들의 이름 
$A_i$와 
$B_i$가 공백을 사이에 두고 주어진다. 
$A_i$와 
$B_i$는 숫자와 영문 대소문자로 이루어진 최대 길이 
$20$의 문자열이며, 서로 같지 않다.

총총이의 이름은 ChongChong으로 주어지며, 기록에서 1회 이상 주어진다.

동명이인은 없으며, 사람의 이름은 대소문자를 구분한다. 
(ChongChong과 chongchong은 다른 이름이다.)

출력
마지막 기록 이후 무지개 댄스를 추는 사람의 수를 출력하라.

예제 입력 1 
12
bnb2011 chansol
chansol chogahui05
chogahui05 jthis
jthis ChongChong
jthis jyheo98
jyheo98 lms0806
lms0806 pichulia
pichulia pjshwa
pjshwa r4pidstart
r4pidstart swoon
swoon tony9402
tony9402 bnb2011
예제 출력 1 
10
*/


