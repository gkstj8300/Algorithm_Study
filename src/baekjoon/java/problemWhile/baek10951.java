package baekjoon.problemWhile;

import java.util.*;

public class baek10951 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		//hasNextInt란 Scanner 객체에 입력값이 int값일 때만 true를 반환
		while(sc.hasNextInt()) {
			int a = sc.nextInt();
			int b = sc.nextInt();
			System.out.println(a+b);
			
		}
		sc.close();
	}

}
