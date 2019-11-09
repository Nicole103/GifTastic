$(document).ready(function () {
    //global varables
    //Array for buttons
    var movie = ["Toy Story", "Monsters, inc", "Up", "Finding Nemo", "A Bugs Life"];


    //function to display giphys
    //onclick function
    // $("#button-list").on("click",".btn", function () {
    function showGifs() {

        $("#gif-view").empty();
        var movie = $(this).attr("data-name");

        //giphy link besure to limit responses to no more then 10 (limit=10 at end of link)
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            movie + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=5";

        //ajax to GET giphys for each button value
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .done(function (response) {
                console.log(queryURL);
                console.log(response);

                // var results = response.data;
                var results = response.data;
                // for loop with if statement
                // for(var i = 0; i < results.length; i++)

                for (var j = 0; j < results.length; j++) {
                    //if statement include ratings in

                    var movieGifDiv = $("<div>");
                    movieGifDiv.addClass("holder");


                    //add img tag to response
                    var gifImage = $("<img>");
                    gifImage.attr("src", response.data[j].images.original_still.url);
                    gifImage.attr("data-still", response.data[j].images.original_still.url);
                    gifImage.attr("data-animate", response.data[j].images.original.url);
                    gifImage.attr("data-state", "still");
                    gifImage.attr("class", "gif");

                    movieGifDiv.append(gifImage);

                    var rating = response.data[j].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    movieGifDiv.append(p);

                    $("#gif-view").append(movieGifDiv);

                }

            });

    }

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

    function gifState() {

        var state = $(this).attr("data-state");
        var animateGif = $(this).attr("data-animate");
        var stillGif = $(this).attr("data-still");

        if (state == "still") {
            $(this).attr("src", animateGif);
            $(this).attr("data-state", "animate");
        }
        else {
            $(this).attr("src", stillGif);
            $(this).attr("data-state", "still");
        }
    }

    //add new movies to the button list
    $("#searchBtn").on("click", function () {
        
        var movieAdd = $("#add-movie").val().trim();
       
        movie.push(movieAdd);

        renderButtons();
       

    })
    // make the images still
    // on click animate the images

    renderButtons();

    $(document).on("click", ".gif-btn", showGifs);
    $(document).on("click", ".gif", gifState);
});
