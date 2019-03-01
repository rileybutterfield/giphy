// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

var custom_api_url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC"

$("#search-button").click(function(){
     $.ajax({
        url: custom_api_url,
        method: "GET",
        success: function(response) {
           $(".gallery").html("<img src ='" + response.data[1].images.fixed_height_still.url + "'>" );
        
        }
    }); 
  
  
});

