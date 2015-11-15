var decimal = 100;
var octal = 0144; //JS octals have a leading zero
var hex = 0x64;   //JS hex numbers begin with 0x
var json = "{\"foo\":100}";
var json2 = "{\"foo\":" + decimal + "}";
var json3 = "{\"foo\":" + octal + "}";
var json4 = "{\"foo\":" + hex + "}";

// All JSON strings are {"foo":100}