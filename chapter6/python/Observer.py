from abc import ABC, abstractmethod

__author__ = "Bridget Wu"
__copyright__ = "Copyright 2022, Getting started with design pattern"
__license__ = "MIT"
__version__ = "1.0.0"

'''
   Subject provides an interface for adding and removing observers and a notification method.
'''
class Subject(ABC):
    
    @abstractmethod
    def register_observer(self, observer):
        pass

    @abstractmethod
    def remove_observer(self, observer):
        pass

    @abstractmethod
    def notify_observers(self):
        pass
'''
   WeatherData is the concrete implementation of Subject.
   It maintains a list of observers subscribed to it. Whenever it's weather changes it notify all observers.
'''
class WeatherData(Subject):

    def __init__(self):
        self.observers = []
        self.temperature = ''
        self.humidity = ''
        self.wind = ''
    # helper methods to register observers. Add code to notify the observers of updates when the weather data updates.
    def register_observer(self, weather):
        self.observers.append(weather)

    # helper methods to remove register observers.
    def remove_observer(self, weather):
        self.observers.remove(weather)

    # notify the observers of updates when the weather data updates.
    def notify_observers(self):
        for observer in self.observers:
            observer.update(self.temperature, self.humidity, self.wind)

    # set current weather measurement data from weather station
    def set_measurements(self, temperature, humidity, wind):
        self.temperature = temperature
        self.humidity = humidity
        self.wind = wind
        self.measurements_changed()
        
    # when weather data changed, notify notifyObservers
    def measurements_changed(self):
        print("=== Weather Data changed! ===")
        self.notify_observers()
'''
  Every observer must implement 'Observer' interface, If they want to subscribe to subject's notifications.
  update the weather data
'''
class Observer(ABC):
    @abstractmethod
    def update(self, temperature, humidity, wind):
        pass
'''
  HouseWeatherDataDevice as concrete Observer class implement Observer interface
  the device register WeatherData subject. It will get notified when weather condition changed
'''
class HouseWeatherDataDevice(Observer):

    # initialized HouseWeatherDataDevice
    def __init__(self, weatherData):
        self.temperature = ''
        self.humidity = ''
        self.wind =''
        weatherData.register_observer(self)
    # implement Observer update method
    def update(self, temperature, humidity, wind):
        self.temperature = temperature
        self.humidity = humidity
        self.wind = wind
        self.display_weather_data()

    # display the current weather data
    def display_weather_data(self):
        print("HouseWeatherDataDevice weather data:")
        print(" Temperature: {} F".format(self.temperature))
        print(" Humidity: {} %".format(self.humidity))
        print(" Wind: {} mph".format(self.wind))
'''
  CarWeatherDataDevice as concrete Observer class implement Observer interface
  the device register WeatherData subject. It will get notified when weather condition changed
'''
class CarWeatherDataDevice(Observer):
    # initialized HouseWeatherDataDevice
    def __init__(self, weatherData):
        self.temperature = ''
        self.humidity = ''
        self.wind =''
        weatherData.register_observer(self)

    # implement Observer update method
    def update(self, temperature, humidity, wind):
        self.temperature = temperature
        self.humidity = humidity
        self.wind = wind
        self.display_weather_data()
   
    # display the current weather data
    def display_weather_data(self):
        print("CarWeatherDataDevice weather data:")
        print(" Temperature: {} F".format(self.temperature))
        print(" Humidity: {} %".format(self.humidity))
        print(" Wind: {} mph".format(self.wind))

def main():
    #initial WeatherData subject
    weather = WeatherData()
    # initial HouseWeatherDataDevice Observer and register WeatherData
    house_device_observer = HouseWeatherDataDevice(weather)
    # initial CarWeatherDataDevice Observer and register WeatherData
    car_device_observer = CarWeatherDataDevice(weather)
    # update weather data and notify all its Observers
    weather.set_measurements(56.2, 37.02, 14)
    #update weather data and notify all its Observers
    weather.set_measurements(60.2, 32.02, 18)
    #remove CarWeatherDataDevice Observer, it will not longer get notify when weather changed
    weather.remove_observer(car_device_observer)
    print("Removed CarWeatherDataDevice Observer")
    #update weather data and notify all its Observers - only HouseWeatherDataDevice get notify
    weather.set_measurements(30.2, 12.02, 23)

if __name__ == '__main__':
    main()