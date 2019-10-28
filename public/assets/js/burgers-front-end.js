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
    $(".change-devoured").on("click", function(event){

        console.log("this button was clicked");
        // creating an id variable based on the id of the item attempting to update (id number of the burger that will have its devoured value updated to true)
        var id = $(this).data("id");
        console.log(id);

        var newDevouredState = {
            devoured: true
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to true");
                
                //Reload page to get the updated list
                location.reload();
            }
        );
    });

});