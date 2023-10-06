package baekjoon.problemArray;

import java.util.Scanner;

public class baek2577 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		int a = sc.nextInt();
		int b = sc.nextInt();
		int c = sc.nextInt();
		
		int x = a * b * c; //17,037,300
		
		String s = Integer.toString(x); // 정수형인 x를 문자형으로 형변환
		
		for(int i = 0; i <= 9; i++) {
			int count = 0;
			for(int j = 0; j < s.length(); j++) {
				if((s.charAt(j) - '0')==i) {
					count++;
				}
			}
			System.out.println(count);
		}
		
		

	}

}
