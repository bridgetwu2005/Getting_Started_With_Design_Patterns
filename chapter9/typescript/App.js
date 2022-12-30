"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HomeFacade_1 = require("./HomeFacade");
/**
 * Chapter 9: Facade Design Pattern
 * Client classes don't know the detail of concrete class implementation which provided by the complex service.
 * When if you decide to use different service, you only need to rewrite the facade class.
 *
 * @Author: Bridget
 */
let homeFacade = new HomeFacade_1.HomeFacade();
console.log("At home");
homeFacade.atHome();
console.log("Leave home");
homeFacade.leaveHome();
