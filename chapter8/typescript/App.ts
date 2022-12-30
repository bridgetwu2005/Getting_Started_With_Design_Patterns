import { ImageManagerProxy } from "./ImageManagerProxy";


//create ImageManagerProxy instance
let imageManagerProxy = new ImageManagerProxy();
// use ImageManagerProxy to invoke ImageManager instead of calling ImageManager directly to upload image
imageManagerProxy.uploadImage("proxy_pattern_pic.png");
console.log();
// use ImageManagerProxy to invoke ImageManager instead of calling ImageManager directly to get image
imageManagerProxy.getImage("proxy_pattern_pic.png");