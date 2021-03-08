#include <DHT.h>
#include <DHT_U.h>

const byte sensor = 3;
DHT dht(sensor, DHT11);

void setup()
{
    Serial.begin(9600);
    dht.begin();
    delay(1000);
}

void loop()
{
    Serial.print(dht.readTemperature());
    Serial.print(" ");
    Serial.print(dht.readHumidity());
    Serial.println();
    delay(3000);
}