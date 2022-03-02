import App from "./app.js";
// const App = require("app");
// const btn = document.getElementById("btn");
// btn.innerHTML = "App.app";
// btn.value = App.apply;
const MyObject = new App("app");
let name;

$("body").css("text-align", "center");

$("#btn").click(function(){
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {
        name = quote["anime"];
        $("#container").append("<b>Anime name: "+name+"</b>");
        console.log(quote)}
        )
})




// btn.innerHTML = MyObject.name;