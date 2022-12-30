"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherData = void 0;
/**
 * WeatherData is the concrete implementation of Subject.
 * It maintains a list of observers subscribed to it. Whenever it's weather changes it notify all observers.
 *
 * @Author Bridget Wu
 */
class WeatherData {
    constructor() {
        //
        /**
          * @type {Observer[]} initialize List of observers in WeatherData
        */
        this.observers = [];
        this.temperature = "";
        this.humidity = "";
        this.wind = "";
    }
    /**
     * helper methods to register and de-register observers. Add code to notify the observers of updates when the weather data updates.
     *
     * @param o
     */
    registerObserver(o) {
        this.observers.push(o);
    }
    /**
     * helper methods to remove register observers.
     *
     * @param o
     */
    removeObserver(o) {
        const observerIndex = this.observers.indexOf(o);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
    }
    /**
     * notify the observers of updates when the weather data updates.
     */
    notifyObservers() {
        for (const observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.wind);
        }
    }
    /**
     * set current weather measurement data from weather station
     *
     * @param temperature
     * @param humidity
     * @param wind
     */
    setMeasurements(temperature, humidity, wind) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.wind = wind;
        this.measurementsChanged();
    }
    /**
     * when weather data changed, notify notifyObservers
     */
    measurementsChanged() {
        console.log("=== Weather Data changed! ===");
        this.notifyObservers();
        console.log();
    }
}
exports.WeatherData = WeatherData;
