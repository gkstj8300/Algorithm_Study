package problemFor;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Scanner;
import java.util.StringTokenizer;

public class AplusBmius3  {

	public static void main(String [] args) throws Exception {
		
		/*
		 * Scanner scanner = new Scanner(System.in);
		 * 
		 * int t = scanner.nextInt();
		 * 
		 * for(int i = 0; i < t; i++) { int a = scanner.nextInt(); int b =
		 * scanner.nextInt(); System.out.println(a+b); }
		 */
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		int s = Integer.parseInt(br.readLine().trim());
		
		for(int i = 0; i < s; i++) {
			
			StringTokenizer st = new StringTokenizer(br.readLine().trim());
			
			int a = Integer.parseInt(st.nextToken());
			int b = Integer.parseInt(st.nextToken());
			
			bw.write("\n"+(a+b));
		}
		
		bw.flush();
		bw.close();
		

	}
	
}
