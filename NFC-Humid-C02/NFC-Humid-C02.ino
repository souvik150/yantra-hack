#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266HTTPClient.h>
#include <SPI.h>
#include <MFRC522.h>

const int waterSensorPin = D1;     // Digital input pin for water sensor
const int humiditySensorPin = A0;  // Analog input pin for humidity sensor
const int redLedPin = D2;          // Red LED pin
const int greenLedPin = D4;        // Green LED pin
const int blueLedPin = D0;         // Blue LED pin

const unsigned long ledTimeout = 5000;  // Timeout value in milliseconds (5 seconds)

unsigned long lastHumidityDetectedTime = 0;  // Variable to store the time when humidity was last detected

// Define the SS and RST pins for the MFRC522 RFID module
const int SS_PIN = D8;
const int RST_PIN = D3;

MFRC522 mfrc522(SS_PIN, RST_PIN);

const char *ssid = "404!";
const char *password = "144cdc10";
const char *host = "192.168.1.100";

String getData, Link;
String cardID = "";

void setup() {
  delay(1000);
  Serial.begin(115200);
  SPI.begin();
  mfrc522.PCD_Init();
  WiFi.mode(WIFI_OFF);
  delay(1000);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.print(ssid);
  while (WiFi.status() != WL_CONNECTED) 
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("Connected");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
  pinMode(redLedPin, OUTPUT);
  pinMode(greenLedPin, OUTPUT);
  pinMode(blueLedPin, OUTPUT);
}

void loop() {
  if (WiFi.status() != WL_CONNECTED) 
  {
    WiFi.disconnect();
    WiFi.mode(WIFI_STA);
    Serial.print("Reconnecting to ");
    Serial.println(ssid);
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) 
    {
      delay(500);
      Serial.print(".");
    }
    Serial.println("");
    Serial.println("Connected");
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
  }
  
  // Water and humidity sensing code
  int waterLevel = digitalRead(waterSensorPin);
  int humidityLevel = analogRead(humiditySensorPin);
  Serial.print("Water Level: ");
  Serial.println(waterLevel);
  Serial.print("Humidity Level: ");
  Serial.println(humidityLevel);

  if (waterLevel == HIGH) {
    digitalWrite(redLedPin, HIGH);     // Red LED ON
    digitalWrite(greenLedPin, LOW);    // Green LED OFF
    digitalWrite(blueLedPin, LOW);     // Blue LED OFF
  } else if (humidityLevel > 500) { // Adjust the humidity threshold according to your sensor's readings
    digitalWrite(redLedPin, HIGH);     // Red LED ON
    digitalWrite(greenLedPin, LOW);    // Green LED OFF
    digitalWrite(blueLedPin, HIGH);    // Blue LED ON
    lastHumidityDetectedTime = millis();  // Update the last detected time
  } else {
    unsigned long currentTime = millis();
    if (currentTime - lastHumidityDetectedTime >= ledTimeout) {
      digitalWrite(redLedPin, LOW);      // Red LED OFF
      digitalWrite(greenLedPin, HIGH);   // Green LED ON
      digitalWrite(blueLedPin, HIGH);    // Blue LED ON
    }
  }

  // RFID code
  if (!mfrc522.PICC_IsNewCardPresent()) {
    return;
  }
  if (!mfrc522.PICC_ReadCardSerial()) {
    return;
  }
  for (byte i = 0; i < mfrc522.uid.size; i++) {
    cardID += String(mfrc522.uid.uidByte[i], HEX);
  }
  HTTPClient http;
  getData = "?CardID=" + cardID;
  Link = "http://" + String(host) + "/loginsystem/postdemo.php" + getData;
  WiFiClient client;
  http.begin(client, Link);
  int httpCode = http.GET();
  delay(10);
  String payload = http.getString();
  Serial.println(httpCode);
  Serial.println(payload);
  Serial.println(cardID);
  if (payload == "login") {
    digitalWrite(redLedPin, HIGH);
    Serial.println("Red on");
  } else if (payload == "logout") {
    digitalWrite(blueLedPin, HIGH);
    Serial.println("Blue on");
  } else if (payload == "successful" || payload == "Card available") {
    digitalWrite(redLedPin, HIGH);
    digitalWrite(blueLedPin, HIGH);
  }
  delay(500);
  cardID = "";
  getData = "";
  Link = "";
  http.end();
  digitalWrite(redLedPin, LOW);
  digitalWrite(blueLedPin, LOW);

  delay(100); // Adjust the delay according to your needs
}
