/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
// js for change text color through click event.
  function changColor(){
    const para_color_change = document.getElementById("para_color_change")
    para_color_change.style.color = "green";
  }

  // var myName = "Abdul Shkoor";
  // var string2 = "My Name is ";
  // var button = document.write(string2  + myName) ;
  