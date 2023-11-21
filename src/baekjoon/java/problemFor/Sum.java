package baekjoon.problemFor;

import java.util.Scanner;

public class Sum {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		
		int a = scanner.nextInt();
		int sum = 0;
		scanner.close();
		
		for(int i = 0; i <= a; i++) {	
			sum += i;
		}
		
		System.out.println(sum);
		
		
	}

}
