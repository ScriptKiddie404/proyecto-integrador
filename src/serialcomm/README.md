# Serialcomm

## Instrucciones
Este pequeña aplicación es la encargada de realizar la comunicación serial entre la placa Arduino y la base de datos (MongoDB). Para su realización se usaron la siguientes dependencias:

* SerialPort
* Mongoose
* Chalk

Para instalarla sólo es necesario (como ya se mencionó en el index) ejecutar el siguiente comando:

```bash
npm install
```

Seguido de:

```
npm start
```

### 

## Sobre el funcionamiento

Primero que nada se debe poseer un circuito armado con la siguiente configuración:

![Circuito armado](/images/2021-03-07-23-18-24.png)

Recordar que previamente también se debe cargar el [sketch](arduino%20sketch/sensor_temperatura_humedad.ino) del circuito a la placa Arduino.

En caso de usuarios linux, cambiar el puerto COM3 por el puerto adecuado en el archivo [principal](src/app.js) de la aplicación.

