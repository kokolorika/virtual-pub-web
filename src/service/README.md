# Service
Hier befinden sich die Schnittstellen und deren Implementierungen zum Server.
Falls es mehrere Implementierungen gibt, werden diese in verschiedenen Ordnern verwaltet.

Gibt es bspw. eine Mockimplementierung zum testen sollte es den Ordner 
```service/mock```
geben.

Der Ordnername (im Beispiel 'mock') gibt hierbei die zu verwendende Implementierung des Services an.
Damit eine Implementierung verwendet wird, muss in der ```.env.local``` der Parameter ```VUE_APP_SERVICE``` gesetzt sein. Der Wert ist hierbei der entsprechende Ordnername dessen Service-Implementierung verwendet werden soll.

## Implementierung
Bei der Implementierung einer neuen Schnittstelle, ist immer darauf zu achten dass diese auch exportiert wird. Der Export muss immer über die ```service/{impl}/api/index.js``` geschehen.

## Quellen
https://cli.vuejs.org/config/#publicpath -> vue.config.js

https://cli.vuejs.org/guide/mode-and-env.html#environment-variables -> Environment Variablen mit Vue CLI