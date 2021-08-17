package problemArray;

import java.util.Scanner;

public class baek2562 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		

		int[] arr = new int[9];
		
		int max = arr[0];
		int check = 0;
		
		for(int i = 0; i < arr.length; i++) {
			arr[i] = sc.nextInt();
			if(max < arr[i]) {
				max = arr[i];
				check = i+1;
			}
		}
		
		System.out.println(max);
		System.out.println(check);
		
	}

}
