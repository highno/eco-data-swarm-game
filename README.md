# eco-data-swarm game.

Steps.

1) Make Load Scene mit Auswahl von 5 Persona's durch Taste Keyboard 1-5 kommt man ins Spiel

2) Game Scene Start.
 - 5 von 10 Skill/aktionskarten erscheinen unten am Bildschirm
 - Polygon karte von Deutschland unterteilt in X(ca 16) Polygonen mit Initial werten random 5-25 % wird als Hauptspielbrett angezeigt.
 - Stimmung unsere KI-Figur als Status wird rechts oben angezeigt. 
 - Stimmung unsere mentalen Lage wird darunter angezeigt.

 Warten auf Interaktion.

Der Spieler kann mit Keyboard 1-3 eine Karte spielen.
- Eine Karte bewirkt (gedacht gibt es erstmal 10)
    - Steigerung von Prozenten in einer zufälligen Region (Polygon)
    - Steigerung oder Reduktion von Punkte in der mentalen Lage.
    - CO2 Verbrauch wirkt nachteilig gegen über Klimaziel.

Nachdem Zug geht es in die Nächste Runde.
und man erhält erneut 3 aus den verbleibenden 9 Karten. (wollen im Protoyp immer 5 aus 10, kein Impl einen Kartenstapels.)
Mentale Lage wird zwischen den Zügen etwas erholt. 
Status des Sensor bleibt.
Status CO2 bleibt. hat aber auch einen Faktor je größer Status der Sensoren desto stärken steigt auch CO2(multiplikator?)

Mögliche Character auswahl.

Wissenschaftler Data Scientist. 
- Vorteile Hoher Impact(Multiplikator von Steigerung von Prozenten der Regionen, Multiplikator bei Steigerung der Mentalen Lage, Negativer Multiplikator bei Reduktion Mentalen Lage)

Bürger wenig Impact Sensorprozent
- wenig multiplikator mentale Lage gefährden.
- viel multiplikator mentale Lage abbauen

Journalist
- ...
- ...

Politiker
- ...
- ...

Nerd
- ...
- ...


Mögliche Karten (Für Use Case werden nur 10 Karten von Bürger erdacht und implementiert Data Scientist angerissen.)

Bürger

- Karte 1. Teilnahme Fridays4Future. Mittelmässig auf Sensore, abbauen Mentale Lage, medium C02 Verbrauch
- Karte 2. Teilnahme an Bürgertalks zu Nachhaltigkeit. Mittelmäßig auf Sensor, leichter aufbau Mentale Lage. kleiner CO2 Verbrauch
- Karte 3. Diskussionsrunde in Kommunalrat. Mittelmaßig auf Sensor, stärker aufbau Mentale Lage. kleiner CO2 Verbrauch
- Karte 4. Stammtisch Nachhaltigkeit. kleine wirkung auf Sensor. leichter abbau Mentale Lage. kleinr CO2 Verbrauch
- Karte 5. Teilnahme Deutschlandweite Hackathons. große Wirkung auf Sensor. starker aufbau Mentale Lage. großer CO2 Verbrauch
- Karte 6. Mitwirkung Initiativen Nachhaltigkeit. große Wirkung auf Sensor. starke aufbau Mentale Lage. mittelmäßiger CO2 Verbrauch
- Karte 7. ...
- Karte 8. ...
- Karte 9. ...
- Karte 10. ...

Data Scientist
- Karte 1. Forschung an KI Methoden zum Monitor und Analyse von Umweltdaten Hoch auf Sensoren, hoch Mentale Lage, hoch CO2 Verbrauch.
- Karte 2. Teilnahme internationale Konferenzen, mittel auf Sensoren. hoch auf Mentale Lage, hoch C02 Verbrauch
- Karte 3. Interview über aktuelle CO2 Situation, wenig auf Sensoren. wenig auf Mentale Lage, wenig CO2 Verbrauch.






















# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku main
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
