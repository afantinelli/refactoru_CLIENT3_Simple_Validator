/*Phone Number */

phone_number = prompt("What is your phone number?" + 
	" \n Please enter your 10-digit number separated by dashes xxx-xxx-xxxx" + 
	" \n\n Don't worry, your phone number will not be used for SPAM");
if(phone_number.length !== 0){

	if((phone_number.charAt(3) === "-") && (phone_number.charAt(7) === "-") && (phone_number.length === 12)){
		alert("Thank you for your phone number")
	}else{
		alert("The phone number you have entered is invalid. Please enter a valid phone number");
	}
}else{
	alert("Please enter your phone number");
}
/*Date of Birth */

birth_date = prompt("What is your date of birth?" + 
	" \n MM/DD/YY" + 
	" \n\n Your information will not be used for SPAM");
if(birth_date.length !== 0){

	if((birth_date.charAt(2) === "/") && (birth_date.charAt(5) === "/") && (birth_date.length === 8)){
		alert("Thank you for your date of birth");
	}else{
		alert("The date of birth you have entered is invalid.  Please enter a valid date of birth");
	}
}else{
	alert("Please enter your date of birth");
}
/*Postal Code */

postal_code = prompt("What is your postal code?" +
	" \n Please enter your 5 digit or 5 digit+4 zip code" +
	" \n\n Don't worry, your postal code will not be used as SPAM");
if(postal_code.length !== 0){

	if ((postal_code.length === 5) || ((postal_code.length === 10) && (postal_code.charAt(5) === "-"))){
	alert("Thank you for entering your postal code");
	}else{
		alert("You have entered an incorrect postal code");
	}
}else{
	alert("Please enter your postal code");
}
/*State Abbreviation */

state_abbr = prompt("Where do you live?" +
	" \n State Abbreviation XX" +
	" \n\n Your state abbreviation will not be used as SPAM");
if(state_abbr.length !== 0){
if((state_abbr.length === 2) && (state_abbr.toUpperCase() === state_abbr)){
	alert("Thank you for submitting your state abbreviation");
}else{
	alert("You have submitted an incorrect state abbreviation");
}
}else{
	alert("Please enter your state abbreviation");
}

/*Married */

marital_status = prompt("Are you married?" +
	" \n Yes or No" +
	" \n\n Your information will not be used for SPAM");
if(marital_status.length !== 0){
if((marital_status.toLowerCase() === "yes") || (marital_status.toLowerCase() === "no")){
	alert("Thank you for submitting your marital status");
}else{
	alert("Your response is invalid");
}
}else{
	alert("Please enter your marital status");
}

