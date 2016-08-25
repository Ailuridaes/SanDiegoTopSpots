# SanDiegoTopSpots
### Webpage to display top attractions in San Diego

Connects to API in [this repository](https://github.com/Ailuridaes/SanDiegoTopSpotsApi).

### Technologies Used:
- HTML
- CSS
    + Pure.css Framework
- Javascript
    + AngularJS
- Gulp

After cloning run `bower install`, `npm install` and then `gulp serve` to run on localhost. Defaults to port 8080, which is configurable in the gulpfile in the 'connect' task.

To pull data, url in /app/js/topspots.factory.js must point to SanDiegoTopSpotsApi.
