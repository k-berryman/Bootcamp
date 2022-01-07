/* Movies App
 * Springboard Software Engineering Bootcamp
 * Kaitlin Berryman */

 // When the form is submitted, capture the values for each of the inputs
 // and append them to the DOM along with a button to remove each title and rating from the DOM
$("#submit").on("click", function() {
  let movie = $("#movie").val();
  let rating = $("#rating").val();

  // Ensure that the rating of a movie can only be between 0 and 10.
  if(rating > 10 || rating < 0) {
    alert('Ensure that the rating of a movie can only be between 0 and 10.');
    return;
  }

  // Ensure that a title has at least 2 characters in it.
  if(movie.length < 2) {
    alert('Ensure that a title has at least 2 characters in it.');
    return;
  }

  let div = $(`
    <div>
      <h3>Movie - ${movie}. Rating - ${rating}.</h3>
      <button type="button" id="remove">Remove</button>
    </div>
  `);

  $("#previous-entries").append(div);
});


$("#previous-entries").on("click", "#remove", function(evt) {
  let parent = $(evt.target).parent();
  parent.remove();
});
