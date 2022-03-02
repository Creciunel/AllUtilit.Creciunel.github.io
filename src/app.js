export default function App() {
    this.name = name;
}

App.prototype.get1 = function(){
    $("#btn").click(function(){
            $(".add").html("");
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
        })
}

App.prototype.get2 = function(){
    $("#btn").click(function(){
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
                $(".add").append(`<h3>Anime</h3><b>Name: `+name+`<br><img  class="img1" src="`+img+`" alt="sorry problem with photo">"`);
                $(".img1").css("width","90%");
            }
        })
           
    })
}