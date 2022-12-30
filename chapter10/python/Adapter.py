from abc import ABC, abstractmethod

__author__ = "Bridget Wu"
__copyright__ = "Copyright 2022, Getting started with design pattern"
__license__ = "MIT"
__version__ = "1.0.0"

class EuropeanAppliance(ABC):
    def get_EU_standard_volt(self) -> int:
        """
            EuropeanAppliance defines standard 220 volt electrical outlets in European.
        """
        return 220

    def check_voltage_compatible(self, volt: int) -> bool:
        """
            check input voltage is follow European Appliance Standard
        """
        if volt != self.get_EU_standard_volt():
            return False
        return True

    @abstractmethod
    def run(size: str) :
        pass

class EuropeanCoffeeMachine(EuropeanAppliance):
    """
        EuropeanCoffeeMachine implements run method which make sure input voltage can run European Coffee Machine
    """
    def run(self, volt: int):
        """
            check voltage input is 220 and can run European Coffee Machine to Brew Coffee
        """
        is_volt_compatible = self.check_voltage_compatible(volt)
        print('EuropeanCoffeeMachine: Input Voltage is  {}'.format(volt))
        if is_volt_compatible == False:
             print('Voltage - ({}") is not supported to use European Coffee Machine'.format(volt))
        else:
            print("Brew Coffee!")

class USAppliance(ABC):

    def get_US_standard_volt(self) -> int:
        """
            USAppliance defines standard 110 volt electrical outlets in US.
        """
        return 110

    def check_voltage_compatible(self, volt: int) -> bool:
        """
            check input voltage is follow US Appliance Standard
        """
        if volt != self.get_US_standard_volt():
            return False
        return True

    @abstractmethod
    def run(size: str) :
        pass

class USCoffeeMachine(USAppliance):
    """
        USCoffeeMachine implements run method which make sure input voltage can run US Coffee Machine
    """

    def run(self, volt: int):
        """
        check voltage input is 110 and can run US Coffee Machine to Brew Coffee
        """
        is_volt_compatible = self.check_voltage_compatible(volt)
        print('USCoffeeMachine: Input Voltage is  {}'.format(volt))
        if is_volt_compatible == False:
             print('Voltage - ({}") is not supported to use US Coffee Machine'.format(volt))
        else:
            print("Brew Coffee!")


class USApplianceAdapter(EuropeanAppliance):
    """
        USApplianceAdapter as Adapter implements EuropeanAppliance and convert European Volt to to US Volt
        This conversion make incompatable USAppliance run on European.
    """
    def __init__(self, usCoffeeMachine: USCoffeeMachine) -> None:
        self.usCoffeeMachine = usCoffeeMachine

    def run(self, volt: int):
        """
        The method check input voltage can run USCoffeeMachine. If voltage is higher than US Appliance standard - 110 voltage,
        it will automatically convert volt (from 220 to 110). Then run USCoffeeMachine to brew coffee.
        """
        diff: int = volt - self.usCoffeeMachine.get_US_standard_volt()
        print('USCoffeeMachine: Input Voltage is  {}'.format(volt))
        converted_volt: int = 0
        if diff != 0:
            converted_volt = self.convert_european_to_us_volt(volt, diff)
            print('USPApplianceAdapter converted Input voltage from {} to {} '.format(volt, converted_volt))

    def convert_european_to_us_volt(self, volt: int, diff: int) -> int:
        """
        convert European volt to US volt
        """
        return volt - diff

def main():
    current_volt = 220
    print('--> Run EuropeanAppliance under  {} volt'.format(current_volt))
    euCoffeeMachine = EuropeanCoffeeMachine()
    euCoffeeMachine.run(current_volt)

    print()
    print('--> Run USCoffeeMachine under  {} volt'.format(current_volt))
    usCoffeeMachine = USCoffeeMachine()
    usCoffeeMachine.run(current_volt)

    print()
    print('--> Run USCoffeeMachine through USApplianceAdapter under  {} volt'.format(current_volt))
    usCoffeeMachineAdapter = USApplianceAdapter(usCoffeeMachine)
    usCoffeeMachineAdapter.run(current_volt)

if __name__ == '__main__':
    main()
