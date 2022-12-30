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

import { CarWeatherDataDevice } from "./CarWeatherDataDevice";
import { HouseWeatherDataDevice } from "./HouseWeatherDataDevice";
import { WeatherData } from "./WeatherData";

// initial WeatherData subject
let weather = new WeatherData();
// initial HouseWeatherDataDevice Observer and register WeatherData
let houseDeviceObserver = new HouseWeatherDataDevice();
//register HouseWeatherDataDevice to WeatherData
weather.registerObserver(houseDeviceObserver);
// initial CarWeatherDataDevice Observer and register WeatherData
let carDeviceObserver = new CarWeatherDataDevice();
//register CarWeatherDataDevice to WeatherData
weather.registerObserver(carDeviceObserver);
//update weather data and notify all its Observers
weather.setMeasurements("56.2", "37.02", "14");
//update weather data and notify all its Observers
weather.setMeasurements("60.2", "32.02", "18");
//remove CarWeatherDataDevice Observer, it will not longer get notify when weather changed
weather.removeObserver(carDeviceObserver);
console.log("Removed CarWeatherDataDevice Observer");
//update weather data and notify all its Observers - only HouseWeatherDataDevice get notify
weather.setMeasurements("30.2", "12.02", "23");