import App from "./app.js";
// const App = require("app");
const btn = document.getElementById("btn");
// btn.innerHTML = "App.app";
// btn.value = App.apply;
const MyObject = new App("app");
console.log(MyObject.name);
btn.innerHTML = MyObject.name;