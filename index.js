
function onMouseOut(event) {
  // If the mouse is near the top of the window, show the popup
  // Also, do NOT trigger when hovering or clicking on selects
  if (
    event.clientY < 50 &&
    event.relatedTarget == null &&
    event.target.nodeName.toLowerCase() !== 'select') {
    // Remove this event listener
    document.removeEventListener("mouseout", onMouseOut);

    // Show the popup
    document.getElementById("signup-modal").style.display = "block";
  }
}

document.addEventListener("mouseout", onMouseOut);


function signup() {
  console.log(document.getElementById('email-input').value);
  if (isValidEmail(document.getElementById('email-input').value) && isNonEmpty(document.getElementById('email-input'))) {
    console.log('test');
    Email.send({
      Host: "smtp.gmail.com",
      Username : "alpinexc.com@gmail.com",
      Password : "alpinexc",
      // set To: to alpinexc@gmail.com
      To : 'mcmtrnt3@gmail.com',  
      From : "alpinexc.com@gmail.com",
      Subject : "AlpineXC Newsletter Signup",
      Body : document.getElementById('email-input').value + "     From: " + document.getElementById('email-input').value ,
    })
    .then(function(message){
        document.getElementById('email-input').value = "";
        document.getElementById('signup-error').style.display = "none";
        signupoff();
        // window.location.href = "confirmation.html";
    });

  }
  else {
      // signupoff();
      document.getElementById('signup-error').style.display = "block";
      // document.getElementById('message').innerHTML = 'Please enter a valid email';
      // document.getElementById('message').style.backgroundColor = 'lightcoral';
  }
}

function closeSignupModal() {
  document.getElementById('signup-modal').style.display = "none";
}

function sendEmail() {
    if (isValidEmail(document.getElementById('emailinput').value) && isNonEmpty(document.getElementById('emailinput')) && isNonEmpty(document.getElementById('nameinput')) && isNonEmpty(document.getElementById('messageinput'))) {

    Email.send({
        Host: "smtp.gmail.com",
        Username : "alpinexc.com@gmail.com",
        Password : "alpinexc",
        // set To: to alpinexc@gmail.com
        To : 'mcmtrnt3@gmail.com',  
        From : "alpinexc.com@gmail.com",
        Subject : document.getElementById('emailinput').value,
        Body : document.getElementById('messageinput').value + "     From: " + document.getElementById('nameinput').value ,
    })
    .then(function(message){
        document.getElementById('nameinput').value = "";
        document.getElementById('emailinput').value = "";
        document.getElementById('messageinput').value = "";
        // off();
        window.location.href = "confirmation.html";
    });

    }
    else {
        console.log('testing');
        off();
        document.getElementById('message').innerHTML = 'Please enter a valid email';
        document.getElementById('message').style.backgroundColor = 'lightcoral';
    }
}

function on() {
    document.getElementById("overlay").style.display = "block";
}
  
function off() {
    document.getElementById("overlay").style.display = "none";
}

function signupon() {
  document.getElementById("signup-modal").style.display = "none";
}

function signupoff() {
  document.getElementById("signup-modal").style.display = "none";
}

function initMap() {
  var hdTransport = {lat: 40.6074, lng: -111.93876}; 
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: hdTransport});
  var marker = new google.maps.Marker({position: hdTransport, map: map});
}

function isValidEmail(text) {
   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return re.test(text);
    }


function isNonEmpty(text) {
    if (text.length == 0 || !text || text == null || text == undefined) {
    //if (typeof text === "string" && text.length > 0 ) {
        return false;
    }
    else {
        return true;
    }
}


function dropDownNav() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


function toggleMenu() {
  $("nav.menu").toggleClass("menu_show");
}







