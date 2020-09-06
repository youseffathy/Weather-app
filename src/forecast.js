const chalk = require("chalk");
const request = require("request");

const getWeather = ({ latitude: lat, longitude: lon }, callback) => {
  const url = "http://api.weatherstack.com/current?access_key=8fa4ec9c6e440aa3e769e47d192b847b&query=" + lat + "," + lon;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.success == false) {
      callback("Unable to find location!!", undefined);
    } else {
      callback(undefined, body);
    }
  });
};
module.exports = getWeather;
