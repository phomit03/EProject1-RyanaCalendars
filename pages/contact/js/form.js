// function Check(){

//     //Check Fullname
//     var yourname = document.getElementById("yourname");
//     var errorName = document.getElementById("errorName");
//     if(yourname.value=="")
//     {
//         errorName.innerHTML = "This field is required.";
//             errorName.setAttribute("style","color: red;");
//             yourname.style.border = "2px red solid";
//         yourname.focus();
//         return false;
        
//     }
//     errorName.innerHTML = "";
//     yourname.style.border = "2px #db941d solid";


//     //Check Email
//     var youremail = document.getElementById("youremail");
//     var errorMail = document.getElementById("errorMail");
//     var re2 = /^\w+([\.\-]?\w+)*@\w+(\.\w+){1,3}$/;
//     if(youremail.value=="")
//     {
//         errorMail.innerHTML = "This field is required";
//             errorMail.setAttribute("style","color: red");
//             youremail.style.border = "2px red solid";
//         youremail.focus();
//         return false;
//     }
//     else if(re2.test(youremail.value)==false)
//     {
//         errorMail.innerHTML = "Please enter your email format";
//             errorMail.setAttribute("style","color: red");
//             youremail.style.border = "2px red solid";
//         youremail.select();
//         return false;
//     }
//     else{
//         errorMail.innerHTML = "";
//             youremail.style.border = "2px #db941d solid";
//     }


//     //Check Phone
//     var yourphone = document.getElementById("yourphone");
//     var errorPhone = document.getElementById("errorPhone");
//     var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
//     if(yourphone.value=="")
//     {
//         errorPhone.innerHTML = "This field is required";
//             errorPhone.setAttribute("style","color: red");
//             yourphone.style.border = "2px red solid";
//         yourphone.focus();
//         return false;
//     }
//     else if(vnf_regex.test(yourphone.value)==false)
//     {
//         errorPhone.innerHTML = "Please enter your phone format";
//             errorPhone.setAttribute("style","color: red");
//             yourphone.style.border = "2px red solid";
//         yourphone.select();
//         return false;
//     }
//     else{
//         errorPhone.innerHTML = "";
//             yourphone.style.border = "2px #db941d solid";
//     }


//     //Check message
//     var    yourmessage = document.getElementById("yourmessage");
//     var    errorMessage = document.getElementById("errorMessage");
//     if(yourmessage.value=="")
//     {
//         errorMessage.innerHTML = "This field is required.";
//             errorMessage.setAttribute("style","color: red;");
//             yourmessage.style.border = "2px red solid";
//         yourmessage.focus();
//         return false;
//     }
//     if(yourmessage.value.length < 10)
//     {
//         errorMessage.innerHTML = "Please enter at least 10 characters";
//             errorMessage.setAttribute("style","color: red");
//             yourmessage.style.border = "2px red solid";
//         yourmessage.select();
//         return false;
//     }
//     else{
//         errorMessage.innerHTML = "";
//             yourmessage.style.border = "2px #db941d solid";
//     }
//         alert("Ok!")
//         return true;

// }

// function Check(){
//     alert("Ok!");
// }





