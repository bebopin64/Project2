// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#planSubmit").on("click", function(event) {
  event.preventDefault();

  // make a newUser obj
 
    var newPlan = {
    
      title: $("#title").val().trim(),
    
      time: $("#time").val().trim(),
    
      details: $("#details").val().trim(),
    };
  }
  

  // send an AJAX POST-request with jQuery
  $.post("/api/new", newPlan)
    // on success, run this callback
    .done(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding Pan...");
    });

  // empty each input box by replacing the value with an empty string
  $("#title").val("");
  $("#time").val("");
  $("#details").val("");
});