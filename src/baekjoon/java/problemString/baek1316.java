package baekjoon.problemString;

import java.util.Scanner;

public class baek1316 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		String[] arr = new String[n];
		int count = 0;

		
		for(int i = 0; i < n; i++) {
			arr[i] = sc.next();
		}
		
		for(int i = 0; i < n; i++) {
			int[] groupWord = new int[26];
			boolean groupWordCheck = true;
			
			for(int j = 0; j < arr[i].length(); j++) {
				if(groupWord[(int)arr[i].charAt(j)-97] > 0) {
					groupWordCheck = false;
					break;
				}
				
				int count2 = 1;
				
				for(int k = j + 1; k < arr[i].length(); k++) {
					if(arr[i].charAt(j) != arr[i].charAt(k)) {
						groupWord[(int)arr[i].charAt(j) - 97] = count2;
						break;
					}
					count2++;
					j++;
					
				}
			}
			if(groupWordCheck) {
				count++;
			}
			
		}
		
		System.out.println(count);
	}

}
