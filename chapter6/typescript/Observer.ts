export interface Observer {

}
/**
 * Every observer must implement 'Observer' interface, If they want to subscribe to subject's notifications.
 * <p>
 * update the weather data
 *
 * @Author Bridget Wu
 */
 export interface Observer {
    update(temp: string, humidity: string , wind: string ): void;
}
