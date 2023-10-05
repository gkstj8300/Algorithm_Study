package problemFor;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Scanner;

public class baek2438 {

	public static void main(String args[]) throws Exception {

		/*Scanner sc = new Scanner(System.in);
		
		int a = sc.nextInt();

		for(int i = 0; i < a; i++){
			
			for(int j = 0 ; j < i+1; j++){
				
				System.out.print("*");
				
			}
			
			System.out.println("");
			
		}*/
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int a = Integer.parseInt(br.readLine().trim());
		br.close();
		for(int i = 1; i <= a; i++) {
			for(int j = 1; j <= i; j++) {
				System.out.print("*");
			}
			System.out.println();
		}

	}

}
