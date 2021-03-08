#include <DHT.h>

byte sensor = 2;

DHT dht(sensor, DHT11);

void setup()
{
    Serial.begin(9600);
    dht.begin();
    delay(1000);
}

void loop()
{
    float temperature = dht.readTemperature();
    float humidity = dht.readHumidity();
    Serial.print(temperature);
    Serial.print(" ");
    Serial.print(humidity);
    Serial.println("");
    delay(10000);
}