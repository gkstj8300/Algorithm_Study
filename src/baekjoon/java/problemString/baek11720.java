package baekjoon.problemString;

import java.util.Scanner;

public class baek11720 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int sum = 0;
		String st = sc.next();
		
		for(int i = 0; i < n; i++) {
			sum += st.charAt(i)-'0';
		}
		
		System.out.println(sum);
	}
	
}
