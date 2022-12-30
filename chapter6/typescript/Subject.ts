import { Observer } from "./Observer";

/**
 * Subject provides an interface for adding and removing observers and a notification method.
 *
 * @Author Bridget Wu
 */
 export interface Subject {
    /**
     * register an Observer
     */
    registerObserver(o: Observer): void;

    /**
     * remove an Observer
     */
    removeObserver(o: Observer): void;

    /**
     * notify all registered Observers
     */
    notifyObservers(): void;
}
