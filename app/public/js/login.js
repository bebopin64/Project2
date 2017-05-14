// Code here handles queries for specific characters in the database
// In this case, the user submits a character's name... we then pass that character's name as a
// URL parameter. Our server then performs the search to grab that character from the Database.

// when user hits the search-btn
$("#loginBtn").on("click", function() {

  // save the character they typed into the character-search input
  var searchUser = $("#loginEmail").val().trim();
  var passwordCheck= $("#loginEmail").val().trim();

  // replace any spaces between that character with no space
  // (effectively deleting the spaces). Make the string lowercase
  searchedUser = searchedUser.replace(/\s+/g, "").toLowerCase();

  // run an AJAX GET-request for our servers api,
  // including the user's character in the url
  $.get("/api/" + searchedUser, function(data) {
    // log the data to our console
    console.log(data);
    // if the data is false (i.e. not there), then return an error message
    if (data === false) {
      alert("Email has not been registered")
    }
    // otherwise
    elseif(data.password === passwordCheck) {
      //NEED TO PULL USERS INFORMATION
     
      $("#").show();

      $("#").text(data.username);
   
    }else{
    	alert("Password entered does not match registered password!")
    }

  });

});
