package com.designpattern;

/**
 * Every observer must implement 'Observer' interface, If they want to subscribe to subject's notifications.
 * <p>
 * update the weather data
 *
 * @Author Bridget Wu
 */
public interface Observer {
    void update(float temp, float humidity, int wind);
}
