import { Observer } from "./Observer";
import { Subject } from "./Subject";

/**
 * CarWeatherDataDevice as concrete Observer class implement Observer interface
 * the device register WeatherData subject. It will get notified when weather condition changed
 *
 * @Author Bridget Wu
 */
 export class CarWeatherDataDevice implements Observer {

    private temperature: string = "";;

    private humidity: string = "";;

    private wind: string = "";;

    /**
     * implement Observer update method
     *
     * @param temperature
     * @param humidity
     * @param wind
     */
    public update(temperature: string, humidity: string, wind: string): void{
        this.temperature = temperature;
        this.humidity = humidity;
        this.wind = wind;
        this.displayWeatherData();
    }

    /**
     * display the current weather data
     */
    public displayWeatherData(): void {
        console.log("CarWeatherDataDevice weather data:");
        console.log(" Temperature: " + this.temperature + "F");
        console.log(" Humidity: " + this.humidity + "%");
        console.log(" Wind: " + this.wind + "mph");
    }

}
