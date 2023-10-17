package programmers.java.level_0;

/*
	���������� Ư���� �׸� ���ϱ�
	
	* ���� ����
	�� ���� a, d�� ���̰� n�� boolean �迭 included�� �־����ϴ�. 
	ù°���� a, ������ d�� ������������ included[i]�� i + 1���� �ǹ��� ��, 
	�� ���������� 1�׺��� n�ױ��� included�� true�� �׵鸸 ���� ���� return �ϴ� solution �Լ��� �ۼ��� �ּ���.
	
	* ���ѻ���
	1 �� a �� 100
	1 �� d �� 100
	1 �� included�� ���� �� 100
	included���� true�� ��� �ϳ� �����մϴ�.
*/


public class lessons_181931 {

	// included_len�� �迭 included�� �����Դϴ�.
	int solution(int a, int d, boolean included[]) {
        int sum = 0;
        for(int i = 1; i <= included.length; i++){
            if(included[i - 1] == true)
                sum += (a + (i - 1) * d);
        }
        return sum; 
	}
	
	public static void main(String[] args) {
		lessons_181931 lessons = new lessons_181931();
		boolean[] b = {true, false, false, true, true};
		lessons.solution(3,	4, b);
	}

}
