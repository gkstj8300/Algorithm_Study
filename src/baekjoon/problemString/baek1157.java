package baekjoon.problemString;

import java.util.Scanner;

public class baek1157 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		String s = sc.next().toUpperCase();
		int[] arr = new int[26];
		
		for(int i = 0; i < s.length(); i++) {
			int a = s.charAt(i) - 'A';
			arr[a]++;
		}
		
		int max = 0;
		char c = '?';
		for(int i = 0; i < arr.length; i++) {
			if(max < arr[i]) {
				max = arr[i];
				c = (char)(i+'A');
			}else if (max == arr[i]) {
				c = '?';
			}
		}
		System.out.println(c);

	}

}
