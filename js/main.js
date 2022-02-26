function check(){
	//email
    mail = document.getElementById("mail");
    mailError = document.getElementById("mailError");
	quitac = /^\w+@\w+(\.\w+){1,3}$/;
	if(mail.value==""){
		mailError.innerHTML = "This field is required"; 
		mailError.style.color="red";
		return false;
	}
	else if(quitac.test(mail.value)==false){
		mailError.innerHTML = "Email entered wrong"; 
		mailError.style.color="red";
		return false;
	}
	else{
		mailError.innerHTML = "";
        return true;
	}
}
