package problemFor;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Scanner;

public class baek2739 {

	public static void main(String[] args)throws Exception {

//		/*Scanner sc = new Scanner(System.in);
//		
//		int a = sc.nextInt();
//		
//		for(int i = 1; i <= 9; i++) {
//			System.out.println(a+" * "+i+" = "+a*i);
//		}*/
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		int a = Integer.parseInt(br.readLine().trim());
		
		for(int i = 1; i <= 9; i++) {
			bw.write(a+" * "+i+" = "+a*i+"\n");
		}
		
		br.close();
		bw.flush();
		bw.close();

	}

}
