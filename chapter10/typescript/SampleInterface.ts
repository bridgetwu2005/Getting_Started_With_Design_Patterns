/**
 * interfaces extending classes 
 *
 * @Author: Bridget
 */

/**
 * Define a class
 */
class AClass {
    private message: any;
}
/**
 *  Define a interface extends AClass   
**/
interface AInterface extends AClass {

    run(): void;
}
 /**
 * interfaces extending classes
 */   
class ASubclass extends AClass implements AInterface {
    run() {}
}
    
class BSubclass extends AClass {
    run() {}
}

interface MyInterface{
    //worked
    imp() : number;

    //not working
    imp() : number {
      // do something
    }
}