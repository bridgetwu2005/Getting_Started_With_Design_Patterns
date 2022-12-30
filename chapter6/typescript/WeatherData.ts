import { Observer } from "./Observer";
import { Subject } from "./Subject";


/**
 * WeatherData is the concrete implementation of Subject.
 * It maintains a list of observers subscribed to it. Whenever it's weather changes it notify all observers.
 *
 * @Author Bridget Wu
 */
export class WeatherData implements Subject {
    //
   /**
     * @type {Observer[]} initialize List of observers in WeatherData
   */
    private observers: Observer[] = [];

    private temperature: string = "";

    private humidity: string = "";

    private wind: string = "";


    /**
     * helper methods to register and de-register observers. Add code to notify the observers of updates when the weather data updates.
     *
     * @param o
     */
    public registerObserver(o: Observer): void{
        this.observers.push(o);
    }

    /**
     * helper methods to remove register observers.
     *
     * @param o
     */
    public removeObserver(o: Observer): void{
        const observerIndex = this.observers.indexOf(o);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
    }

    /**
     * notify the observers of updates when the weather data updates.
     */
    public notifyObservers(): void{
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
    public setMeasurements(temperature: string, humidity: string, wind: string): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.wind = wind;
        this.measurementsChanged();
    }

    /**
     * when weather data changed, notify notifyObservers
     */
    public measurementsChanged(): void {
        console.log("=== Weather Data changed! ===");
        this.notifyObservers();
        console.log();
    }
}
