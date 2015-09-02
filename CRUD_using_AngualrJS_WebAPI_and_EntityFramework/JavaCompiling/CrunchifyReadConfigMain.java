package crunchify.com.tutorial;

import java.io.*;
 
/**
 * @author Crunchify.com
 * 
 */
 
public class CrunchifyReadConfigMain {
 
	public static void main(String[] args) throws IOException {
		System.out.println("Hello World!");
		CrunchifyGetPropertyValues properties = new CrunchifyGetPropertyValues();
		properties.getPropValues();
	}
}