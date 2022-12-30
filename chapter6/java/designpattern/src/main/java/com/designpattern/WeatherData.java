package com.designpattern;

import java.util.ArrayList;
import java.util.List;

/**
 * WeatherData is the concrete implementation of Subject.
 * It maintains a list of observers subscribed to it. Whenever it's weather changes it notify all observers.
 *
 * @Author Bridget Wu
 */
public class WeatherData implements Subject {

    private List<Observer> observerList;

    private float temperature;

    private float humidity;

    private int wind;

    /**
     * Create an observers array in WeatherData
     */
    public WeatherData() {
        observerList = new ArrayList<>();
    }

    /**
     * helper methods to register observers. Add code to notify the observers of updates when the weather data updates.
     *
     * @param o
     */
    @Override
    public void registerObserver(Observer o) {
        observerList.add(o);
    }

    /**
     * helper methods to remove register observers.
     *
     * @param o
     */
    @Override
    public void removeObserver(Observer o) {
        observerList.remove(o);
    }

    /**
     * notify the observers of updates when the weather data updates.
     */
    @Override
    public void notifyObservers() {
        for (Observer o : observerList) {
            o.update(temperature, humidity, wind);
        }
    }

    /**
     * set current weather measurement data from weather station
     *
     * @param temperature
     * @param humidity
     * @param wind
     */
    public void setMeasurements(float temperature, float humidity, int wind) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.wind = wind;
        measurementsChanged();
    }

    /**
     * when weather data changed, notify notifyObservers
     */
    public void measurementsChanged() {
        System.out.println("=== Weather Data changed! ===");
        notifyObservers();
        System.out.println();
    }
}
