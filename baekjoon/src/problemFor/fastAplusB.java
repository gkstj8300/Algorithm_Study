package problemFor;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Scanner;

public class fastAplusB {

	public static void main(String[] args) throws IOException{

		
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		int a = Integer.parseInt(br.readLine().trim());
		
		for(int i = 0; i < a; i++) {
			String text = br.readLine();
			String[] word = text.split(" ");
			int b = Integer.parseInt(word[0]);
			int c = Integer.parseInt(word[1]);
			bw.write((b+c) + "\n");
		}
		
		bw.flush();
		bw.close();
		
		
	}

}
