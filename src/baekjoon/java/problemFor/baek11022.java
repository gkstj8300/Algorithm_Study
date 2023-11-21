package baekjoon.problemFor;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Scanner;
import java.util.StringTokenizer;

public class baek11022 {

	public static void main(String[] args) throws Exception {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		int t = Integer.parseInt(br.readLine().trim());
		
		for(int i = 1; i <= t; i++ ) {
			StringTokenizer st = new StringTokenizer(br.readLine().trim());
			int a = Integer.parseInt(st.nextToken());
			int b = Integer.parseInt(st.nextToken());
			bw.write("Case #"+i+": "+a+" + "+b+" = "+(a+b)+"\n");
		}
		
		br.close();
		bw.flush();
		bw.close();
		
//		Scanner sc = new Scanner(System.in);
//		int t = sc.nextInt();
//		
//		for(int i = 1; i <= t; i++) {
//			int a = sc.nextInt();
//			int b = sc.nextInt();
//			System.out.println("Case #"+i+": "+a+" + "+b+" = "+(a+b));
//		}
//		
//		sc.close();
		
		

	}

}
