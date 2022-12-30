package com.designpattern;

/**
 * Chapter 6: Observer Design Pattern
 * Observer pattern is used when there is one-to-many relationship between objects such as if one object is modified,
 * its depenedent objects are to be notified automatically. Observer pattern falls under behavioral pattern category.
 * The process are typically three steps:
 * 1. Register or subscribe the observers to the subject
 * 2. Send the new data values to the observers when the data changes
 * 3. Update the observers accordingly
 *
 * @Author Bridget Wu
 */
public class App {
    public static void main(String[] args) {
        // initial WeatherData subject
        WeatherData weather = new WeatherData();
        // initial HouseWeatherDataDevice Observer and register WeatherData
        HouseWeatherDataDevice houseDeviceObserver = new HouseWeatherDataDevice(weather);
        // initial CarWeatherDataDevice Observer and register WeatherData
        CarWeatherDataDevice carDeviceObserver = new CarWeatherDataDevice(weather);
        //update weather data and notify all its Observers
        weather.setMeasurements(56.2f, 37.02f, 14);
        //update weather data and notify all its Observers
        weather.setMeasurements(60.2f, 32.02f, 18);
        //remove CarWeatherDataDevice Observer, it will not longer get notify when weather changed
        weather.removeObserver(carDeviceObserver);
        System.out.println("Removed CarWeatherDataDevice Observer");
        //update weather data and notify all its Observers - only HouseWeatherDataDevice get notify
        weather.setMeasurements(30.2f, 12.02f, 23);
    }
}
