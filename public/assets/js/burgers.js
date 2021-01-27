$(function () {


    $(".devour").on("click", function () {
        const id = $(this).parent().data("id");
        const newDevouredValue = {
            devoured: 1
        }
        $.ajax(`api/burgers/${id}`, {
            type: "PUT",
            data: newDevouredValue
        }).then(
            function () {
                console.log("The bureger is devouted", newDevouredValue);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".add-burger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $(".form-control").val().trim(),
            devoured: 0
        };


        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("New burger added");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})
