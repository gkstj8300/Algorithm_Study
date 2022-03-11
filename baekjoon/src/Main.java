import java.io.*;
import java.util.*;

public class Main {

	public static void main(String[] args) throws Exception {
		
		Scanner sc = new Scanner(System.in);
		
		int[] arr = new int[] {7, 3, 2, 2, 3};
		int chack = 0;
		Arrays.sort(arr);
		
		for(int i = 0; i < arr.length; i++) {
			
			for(int j = i+1; j < arr.length; j++) {
				
				if(arr[i] == arr[j]) {		
					chack = 1;
					break;
				}
				
			}
			
			if(chack == 0) {
				System.out.print(arr[i] + " ");
			}else {
				chack = 0;
			}
			

		}

		
		
	}
}



