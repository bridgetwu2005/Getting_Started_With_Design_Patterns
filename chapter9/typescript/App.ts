import { HomeFacade } from "./HomeFacade";
/**
 * Chapter 9: Facade Design Pattern
 * Client classes don't know the detail of concrete class implementation which provided by the complex service.
 * When if you decide to use different service, you only need to rewrite the facade class.
 *
 * @Author: Bridget
 */

let homeFacade = new HomeFacade();
console.log("At home");
homeFacade.atHome();
console.log("Leave home");
homeFacade.leaveHome();