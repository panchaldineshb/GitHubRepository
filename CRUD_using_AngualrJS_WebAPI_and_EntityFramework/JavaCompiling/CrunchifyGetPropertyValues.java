package crunchify.com.tutorial;
 
import java.io.*;

import java.util.Date;
import java.util.Properties;

/**
 * @author Crunchify.com
 * 
 */
 
public class CrunchifyGetPropertyValues {
	String result = "";
	InputStream inputStream;
 
	public String getPropValues() throws IOException {
 
		try {
			Properties prop = new Properties();
			String propFileName = "config.properties";
 
			String current = System.getProperty("user.dir");
			System.out.println("Current working directory in Java : " + current);

			System.out.println("Current config.properties : " + this.getClass().getResource(propFileName).getPath());

			System.out.println(this.getClass().getName() + ": " + this.getClass().getResource("").getPath());

			System.out.println(this.getClass().getClassLoader().getClass().getCanonicalName());

			System.out.println("<CURRENT_DIR>: " + this.getClass().getResource(".").getPath());
			System.out.println("<ROOT_DIR>: " + this.getClass().getResource("/").getPath());
			System.out.println("<EMPTY_DIR>: " + this.getClass().getResource("").getPath());
			System.out.println("<PARENT_DIR>: " + this.getClass().getResource("..").getPath());

			inputStream = new FileInputStream(this.getClass().getResource(propFileName).getPath());
 
			if (inputStream != null) {
				prop.load(inputStream);
			} else {
				throw new FileNotFoundException("property file '" + propFileName + "' not found in the classpath");
			}
 
			Date time = new Date(System.currentTimeMillis());
 
			// get the property value and print it out
			String user = prop.getProperty("user");
			String company1 = prop.getProperty("company1");
			String company2 = prop.getProperty("company2");
			String company3 = prop.getProperty("company3");
 
			result = "Company List = " + company1 + ", " + company2 + ", " + company3;
			System.out.println(result + "\nProgram Ran on " + time + " by user=" + user);

			// display new properties
			System.getProperties().list(System.out);

		} catch (Exception e) {
			System.out.println("Exception: " + e);
		} finally {
			inputStream.close();
		}
		return result;
	}
}