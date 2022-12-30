"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarWeatherDataDevice = void 0;
/**
 * CarWeatherDataDevice as concrete Observer class implement Observer interface
 * the device register WeatherData subject. It will get notified when weather condition changed
 *
 * @Author Bridget Wu
 */
class CarWeatherDataDevice {
    constructor() {
        this.temperature = "";
        this.humidity = "";
        this.wind = "";
    }
    ;
    ;
    ;
    // public CarWeatherDataDevice(weatherData: Subject) {
    //     weatherData.registerObserver(this);
    // }
    /**
     * implement Observer update method
     *
     * @param temperature
     * @param humidity
     * @param wind
     */
    update(temperature, humidity, wind) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.wind = wind;
        this.displayWeatherData();
    }
    /**
     * display the current weather data
     */
    displayWeatherData() {
        console.log("CarWeatherDataDevice weather data:");
        console.log(" Temperature: " + this.temperature + "F");
        console.log(" Humidity: " + this.humidity + "%");
        console.log(" Wind: " + this.wind + "mph");
    }
}
exports.CarWeatherDataDevice = CarWeatherDataDevice;
