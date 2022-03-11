import java.io.*;
import java.util.*;

public class test {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		int[] arr = new int[] {1, 2, 2, 3};
		
		int chack = arr.length;
		boolean flag = false;
		
		Arrays.sort(arr);
		
		
		for(int i = 0; i < chack; i++) {

			for(int j = i+1; j < arr.length; j++) {
				
				if(arr[i] == arr[j]) {	
					
					for(int k = j; j < chack-1; k++) {
						arr[i] = arr[i+1];
					}
					chack--;
					flag = true;
					break;
					
				}
			}
			
		}
		
		if(flag) {
			for(int i = 0; i < chack; i++) {
				System.out.println(arr[i]+"a");
			}
		}else {
			System.out.println("없음");
		}
		

	}

}