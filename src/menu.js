import App from "./app.js";

const application = new App();

export default function Menu(name) {
    this.name = name;
}

Menu.prototype.Load = function(){
    let status = 0;
    $(function(){
        $("body").html(`<div class="main-menu">
        <h1>Welcom</h1>
        <p>nice to meet you heer</p>
        <button class="btn1" value="1">Click for start</button>
        </div>`);
        $("div").css({'background': '#91d0db', 
                    'height':'40vh', 
                    'border-radius':'25px',
                    'margin': '0 10%'});
        $('.btn1').click(function(){
            status = $('.btn1').val();
            console.log(status);
        })
    })
    if(status === '1'){
        application.Anime();
    }
}

