import App from "./app.js";
const aplication = new App();

aplication.Anime();

$('#btn1').click(function(){
    $('.menu').css({visibility: 'hidden'})
    $('#container').css({visibility: 'visible'})
})