rmdir /S /Q bin
mkdir bin

javac -encoding UTF8 *.java -d bin
copy resources\config\config.properties bin\crunchify\com\tutorial
