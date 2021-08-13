package problemFor;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Scanner;

public class baek2742 {

	public static void main(String [] args) throws Exception {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		int n = Integer.parseInt(br.readLine().trim());
		
		for(int i = n; i >= 1; i--) {
			bw.write(i + "\n");
		}
		
		bw.flush();
		bw.close();
	}
	
	/*public static void main(String [] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		
		int n = 5;
		
		for(int i = n; i >= 1; i--) {
			System.out.println(i);
		}
		
	}*/
	
}
