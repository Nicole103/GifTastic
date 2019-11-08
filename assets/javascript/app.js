//global varables
//Array for buttons
var movie = ["Toy Story", "Monsters, inc", "Up", "Finding Nemo", "A Bugs Life"];


//function to display giphys
//onclick function
// $("#gif-btn").on("click", function () {
function showGifs() {

    var movie = $(this).attr("data-name");

    //giphy link besure to limit responses to no more then 10 (limit=10 at end of link)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        movie + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    //ajax to GET giphys for each button value
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(queryURL);
            console.log(response);

            // var results = response.data;
            var results = response.data;
            // for loop with if statement
            // for(var i = 0; i < results.length; i++)

            for (var i = 0; i < results.length; i++) {
                //if statement include ratings in
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

                    var movieGifDiv = $("<div class='gif'>");

                    var p = $("<p>").text("Rating: " + results[i].rating);

                    //add img tag to response
                    var gifImage = $("<img>");

                    gifImage.attr("src", results[i].images.fixed_height.url);

                    movieGifDiv.append(p);
                    movieGifDiv.append(gifImage);

                    $("#gif-view").prepend(movieGifDiv);
                }
            }

        });

};

//function to render the buttons
function renderButtons() {

    //where to place the buttons in html
    $("#button-list").empty();

    //for loop to add button tag
    for (var i = 0; i < movie.length; i++) {

        var a = $("<button>");

        a.addClass("gif-btn");

        a.attr("data-name", movie[i]);

        a.text(movie[i]);

        $("#button-list").append(a);
    }
}
//add new movies to the button list
$("#searchBtn").on("click", function (event) {
    event.preventDefault();

    var movieAdd = $("#add-movie").val().trim();

    movie.push(movieAdd);

    renderButtons();

})

$(document).on("click", ".gif-btn", showGifs);

// make the images still

    // on click animate the images

renderButtons();






    