$(document).ready(function(){
    //
    var numPokemon = prompt("How many pokemons");
    GetThePokemons(numPokemon);

})
$("#container").on("click", ".poke-btn", function(){
    MorePokeInfo($(this).attr("data-id"))
})

function GetThePokemons(numPokemon){
    for(var i = 1; i <= numPokemon; i++){
        $.get("http://pokeapi.co/api/v2/pokemon/" + i, function(res){
            RenderThePokemon(res.sprites.front_default, res.id);
        })
    }
}

function RenderThePokemon(src, id){
    var somebutton = document.createElement('button');
    somebutton.setAttribute("class", "poke-btn");
    somebutton.setAttribute("data-id", id);
    // var myImg = document.createElement("img");
    // myImg.setAttribute("src", src);
    $(somebutton).append("<img src='" + src + "' alt=''>");
    $('#container').append(somebutton);
}

function MorePokeInfo(id){
    $.get("http://pokeapi.co/api/v2/pokemon/" + id, function(res){
        console.log(res);
        // build an h1 (name)
        // build an image
        // build an ul from array (moves)

        // build an h2 (weight)
    })
}

function SetMoves(moves){
    // create an ul
    // loop through moves
        // crate lis
        // set inner text to move
}
