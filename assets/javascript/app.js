//global varables
//Array for buttons
var animal = ["shark", "whale", "sea turtle", "seal", "Octopus"];


//function to display giphys
//onclick function
// $("#gif-btn").on("click", function () {
function showGifs(){
   
    var animal = $(this).attr("data-name");
    //giphy link besure to limit responses to no more then 10 (limit=10 at end of link)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    //ajax to GET giphys for each button value

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
       
    });


    
};
//function to render the buttons
function renderButtons() {

    //where to place the buttons in html
    $(".button-container").empty();

    //for loop to add button tag
    for (var i = 0; i < animal.length; i++) {
        var a = $("<button>");
        a.addClass("gif-btn");
        a.attr("data-name", animal[i]);
        a.text(animal[i]);
        $(".button-container").append(a);
    }
}
$(document).on("click", "gif-btn", showGifs);
//adding a button into the array
renderButtons();
 // var results = response.data;
        // for loop with if statement
        // for(var i = 0; i < results.length; i++)
//if statement include ratings in .text

    //add img tag to response

    // make the images still

    // on click animate the images
