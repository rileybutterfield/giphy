// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

var custom_api_url = "https://api.giphy.com/v1/gifs/search?q="
var api_key = "&api_key=dc6zaTOxFJmzC"

$("#search-button").click(function(){
    var search = $("#search-term").val();
    var number = Math.floor(Math.random() * 10);
     $.ajax({
        url: custom_api_url + search + api_key,
        method: "GET",
        success: function(response) {
           $(".gallery").html("<img src ='" + response.data[number].images.fixed_width.url + "'>" );
        
        }
    }); 
  
  
});

