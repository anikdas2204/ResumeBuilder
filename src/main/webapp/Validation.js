function checkForm(){
	var phone = document.getElementsByName("phone");
	var password = document.getElementsByName("password");
	var Cpassword = document.getElementsByName("Cpassword");
	var is_valid = false;
	var paswd=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,12}$/;
	var phoneno = /^\d{10}$/;
	/* If statements to check if text box is empty */
	if (phone[0].value=="" && password[0].value=="") {
		alert("**Password and Phone number fields shouldn't be empty");
		is_valid = false;
	} else if(phone[0].value==""){
		alert("**Phone number field shouldn't be empty");
		is_valid = false;
	} 
	else if(!phone[0].value.match(phoneno)){
		msg1 = "**Phone number should be of 10 digits!"
		alert(msg1);
		is_valid = false;
	}
	else if (password[0].value==""){
		alert("**Password field shouldn't be empty")
		is_valid = false;
	}
	else if(!password[0].value.match(paswd)){
		msg2 = "**Password length should be between 6 to 12, \n There should be one numeric \n An upper case letter \n A lower case letter \n A special character!"
		alert(msg2)
		is_valid = false;
	}
	else if(password[0].value != Cpassword[0].value){
		alert("**Password and Confirm password should be same!");
		password[0].value = "";
		Cpassword[0].value = "";
		is_valid = false;
	}
	 else {
		is_valid = true;

	} return is_valid;
}


function myFunction() {
  var x = document.getElementById("password");
  var y = document.getElementById("Cpassword");
  if (x.type === "password" && y.type === "password") {
    x.type = "text";
    y.type = "text";
  } else {
    x.type = "password"
    y.type = "password";
  }
}



