export default function App() {
    this.name = name;
}

App.prototype.get1 = function(){
        $(".add").html("");
        // $(".add").animate({
        //     height: 'toggle'
        //   });
        fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(quote => {
            let name = quote["anime"];
            let character = quote["character"];
            let note = quote["quote"];
            $(".add").append("<h3>Anime</h3><b>Name: "+name+"</b><br><b>Character: "+character+"</b><br><b>Quote: "+note+"</b><br>");
            $(".add").css("margin", "2%");
            console.log(quote)}
        )
}

App.prototype.get2 = function(){
    $(".add").html("");
    fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
    .then(response => response.json())
    .then(quote => {
        let chek = quote["success"];
        if(chek === true){
            console.log(quote["data"])
            let flag = Math.floor(Math.random() * 14);
            let name= quote["data"][flag]["anime_name"];
            let img= quote["data"][flag]["anime_img"];
            $(".add").append(`<h3>Anime</h3><H3>Name: `+name+`</H3><img  class="img1" src="`+img+`" alt="sorry problem with photo">"`);
            $(".img1").css("width","90%");
        }
    })
}
App.prototype.get3 = function(){
    $(".add").html("");
    fetch('https://ghibliapi.herokuapp.com/films/')
    .then(response => response.json())
    .then(quote => {
        let id = Math.floor(Math.random() * 23);
        const img = quote[id]['image'];
        const title = quote[id]['title'];
        const desctiption = quote[id]['description'];
        console.log(quote[id]);
        $(".add").append(`<h3>Anime</h3><h3>`+title+`</h3><img  class="img1" src="`+img+`" alt="sorry problem with photo"> <p>`+desctiption+`</p>`);
        }
    )
}
App.prototype.Anime = function(){
    $("#btn").click(function(){
        let index = Math.floor(Math.random() * (3 - 0) + 0);
        let object = new App();
        if(index == 0){
            object.get1();
        }
        else if(index == 1){
            object.get2();
        }
        else if(index == 2)
        {
            object.get3();
        }
        else {
            console.log("It's not ready");
        }
    });
}