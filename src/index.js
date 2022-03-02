import App from "./app.js";
// const App = require("app");
// const btn = document.getElementById("btn");
// btn.innerHTML = "App.app";
// btn.value = App.apply;
const MyObject = new App("app");
let name;
let character;
let note;
$("body").css("text-align", "center");

$("#btn").click(function(){
    $(".add").html("");
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {
        name = quote["anime"];
        character = quote["character"];
        note = quote["quote"]
        $(".add").append("<h3>Anime</h3><b>Name: "+name+"</b><br><b>Character: "+character+"</b><br><b>Quote: "+note+"</b><br>");
        $(".add").css("margin", "2%");
        console.log(quote)}
        )
})




// btn.innerHTML = MyObject.name;