// Ensure DOM is fully loaded before attaching handlers 
$(function(){

    //function for adding a new burger
    $(".add-burger").on("submit", function(event) {
        // prevent default on submit event 
        event.preventDefault();
        console.log("attempted to submit new burger");
        console.log($("#new-burger").val().trim());

        var newBurger = {
            name: $("#new-burger").val().trim()
        };

        // Send POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");

                //Reload the page to get uploaded burger list 
                location.reload();
            }
        );
    });


    // function for "devouring" and updating burgers 


})