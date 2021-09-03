package problemArray;

import java.util.Scanner;

public class baek1546 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		int a = sc.nextInt();
		int arr[] = new int[a];
		int max = 0;
		int sum = 0;
		
		
		for(int i = 0; i < arr.length; i++) {
			arr[i] = sc.nextInt();
			if(arr[i] > max) {
				max = arr[i];
			}
			sum = sum+arr[i];
		}
		sc.close();
		double avg = (double)sum / (double)max * 100 / a;
		System.out.println(avg);
	}

}
