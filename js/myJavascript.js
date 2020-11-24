function Submit(){
  var firstname = document.getElementById('fname').value;
  var lastname = document.getElementById('lname').value;
  var countries = document.getElementById('country').value;
  var ques = document.getElementById('subject').value;
  var email = document.getElementById('email').value;
      // Find the element
   		x=document.getElementById("demo");
		x.style.display="block";
    alert("Thank you for showing your interest to know us better! We will get in touch with you real soon!");
  x.className="opened";
  console.log (firstname);

 document.getElementById('swname').innerHTML = firstname + " " + lastname 
 document.getElementById('swemail').innerHTML = email;
 document.getElementById('swcountry').innerHTML = countries;
 document.getElementById('swsubject').innerHTML = ques;
	}
