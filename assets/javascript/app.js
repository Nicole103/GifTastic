//global varables
//Array for buttons
var gifs = ["shark", "whale", "sea turtle", "seal", "Octopus"];
//function to render the buttons
function renderButtons() {

    //where to place the buttons in html
    $(".button-container").empty();

    //for loop to add button tag
    for (var i = 0; i < gifs.length; i++) {
        var a = $("<button>");
        a.addClass("gif-btn");
        a.attr("data-name", gifs[i]);
        a.text(gifs[i]);
        $(".button-container").append(a);
    }
}

renderButtons();

//adding a button into the array

//function to display giphys
//onclick function

//giphy link besure to limit responses to no more then 10 (limit=10 at end of link)

//ajax to GET giphys for each button value

//.then(function (response){}) to call the response from giphy forward
    // for loop with if statement

    //if statement include ratings in .text

    //add img tag to response

    // make the images still

    // on click animate the images
