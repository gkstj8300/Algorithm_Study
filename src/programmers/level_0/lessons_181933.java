package programmers.level_0;

/*
	flag에 따라 다른 값 반환하기
	
	* 문제 설명
	두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, 
	flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.
	
	* 제한사항
	-1,000 ≤ a, b ≤ 1,000
*/


public class lessons_181933 {

    public int solution(int a, int b, boolean flag) {
        int answer = flag ? a+b : a-b;
        return answer;
    }
    
	public static void main(String[] args) {
		lessons_181933 lessons = new lessons_181933();
		lessons.solution(-4,7,true);
	}

}
