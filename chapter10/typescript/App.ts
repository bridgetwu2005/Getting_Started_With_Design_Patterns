import { EuropeanCoffeeMachine } from "./EuropeanCoffeeMachine";
import { USApplianceAdapter } from "./USApplianceAdapter";
import { USCoffeeMachine } from "./USCoffeeMachine";

let currentVolt = 220;
console.log("--> Run EuropeanAppliance under " + currentVolt + " volt");
let euCoffeeMachine = new EuropeanCoffeeMachine();
euCoffeeMachine.run(currentVolt);

console.log();
console.log("--> Run USCoffeeMachine under " + currentVolt + " volt");
let usCoffeeMachine = new USCoffeeMachine();
usCoffeeMachine.run(currentVolt);

console.log();
console.log("--> Run USCoffeeMachine through USApplianceAdapter under " + currentVolt + " volt");
let usCoffeeMachineAdapter = new USApplianceAdapter(usCoffeeMachine);
usCoffeeMachineAdapter.run(currentVolt);
