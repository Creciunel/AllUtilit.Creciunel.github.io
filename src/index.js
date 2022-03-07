import App from "./app.js";

const MyObject = new App();

$("body").css("text-align", "center");

//  MyObject.get2();
let index = Math.floor(Math.random() * (3 - 0) + 0);
switch(index){
    case 0:
        MyObject.get1();
        break;
    case 1:
        MyObject.get2();
        break;
    case 2:
        MyObject.get3();
        break;
    default:
        console.log("Not done");
        break
    }


