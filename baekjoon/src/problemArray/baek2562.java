package problemArray;

import java.util.Scanner;

public class baek2562 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		int[] arr = new int[9];
		int num = arr[0];
		int max = 0;
		
		for(int i = 0; i < arr.length; i++) {
			arr[i] = sc.nextInt();

			if(arr[i] >= 0 && arr[i] <= 100) {
				if(arr[i] > max) {
					max = arr[i];
					num = i+1;
				}
			}
			
		}
		System.out.println(max);
		System.out.println(num);
		
	}

}
