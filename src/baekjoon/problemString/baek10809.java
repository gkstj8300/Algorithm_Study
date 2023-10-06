package baekjoon.problemString;

import java.util.Scanner;

public class baek10809 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		
		int[] arr = new int[26];
		
		for(int i = 0; i < arr.length; i++) {
			arr[i] = -1;
		}
		
		String s = sc.next();
		for(int i = 0; i < s.length(); i++) {
			char c = s.charAt(i);
			int tmp = (int)c;
			tmp -= 97;
			if(arr[tmp] == -1) {
				arr[tmp] = i;
			}
		}
		
		for(int i = 0; i < arr.length; i++) {
			System.out.println(arr[i] + " ");
		}
		
		
		

	}
	
	public void test() {
		
		Scanner sc = new Scanner(System.in);
		
		int[] arr = new int[26];
		
		for(int i = 0; i < arr.length; i++) {
			arr[i] = -1;
		}
		
		String s = sc.next();
		for(int i = 0; i < s.length(); i++) {
			char c = s.charAt(i);
			int tmp = (int)c;
			tmp -= 97;
			if(arr[tmp] == -1) {
				arr[tmp] = i;
			}
		}
		
		for(int i = 0; i < arr.length; i++) {
			System.out.println(arr[i] + " ");
		}
	}

}
