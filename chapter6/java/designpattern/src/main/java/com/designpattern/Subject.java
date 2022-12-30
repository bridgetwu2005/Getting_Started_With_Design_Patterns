package com.designpattern;

/**
 * Subject provides an interface for adding and removing observers and a notification method.
 *
 * @Author Bridget Wu
 */
public interface Subject {
    /**
     * register an Observer
     */
    void registerObserver(Observer o);

    /**
     * remove an Observer
     */
    void removeObserver(Observer o);

    /**
     * notify all registered Observers
     */
    void notifyObservers();
}
