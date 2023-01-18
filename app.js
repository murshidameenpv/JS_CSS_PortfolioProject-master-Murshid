
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


                            // --validation--


// function validateName() {
//    var text=document.getElementById("cname").value;
//    var regex1 = /^[A-Za-z\s\.]+$/;  

//    if(text == ""){
//     document.getElementById("name-error").innerHTML="**Name Can not be Empty";
//     document.getElementById("name-error").style.visibility="visible";
//     document.getElementById("name-error").style.color="red";
//     return false;
//    }
//    else if(regex1.test(text)){
//     document.getElementById("name-error").innerHTML="valid";
//     document.getElementById("name-error").style.visibility="visible";
//     document.getElementById("name-error").style.color="green";
//     return true;
//    }
//    else if(!regex1.test(text)){
//     document.getElementById("name-error").innerHTML="Invalid";
//     document.getElementById("name-error").style.visibility="visible";
//     document.getElementById("name-error").style.color="red";
//     return false;
//    }
//    else{
//     return true;
//    }
// };

// function validateEmail() {
//   var emailtext = document.getElementById("cemail").value;
//   var regex2 =/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})(.[a-z]{2,8})?$/ ;


//   if(regex2.test(emailtext)) {
//     document.getElementById("mail-error").innerHTML="valid";
//     document.getElementById("mail-error").style.visibility="visible";
//     document.getElementById("mail-error").style.color="green";
//     return true;
//  }
//  else{
//     document.getElementById("mail-error").innerHTML="**invalid email";
//     document.getElementById("mail-error").style.visibility="visible";
//     document.getElementById("mail-error").style.color="red";
//     return false;
//  }
// };

// function validateSubject() {
//     var subtext=document.getElementById("csubject").value;
//     var regex3 = /^[A-Za-z]+$/;  
 
//     if(subtext == ""){
//      document.getElementById("subject-error").innerHTML="**Subject Can not be Empty";
//      document.getElementById("subject-error").style.visibility="visible";
//      document.getElementById("subject-error").style.color="red";
//      return false
//     }
//     if(regex3.test(subtext)){
//      document.getElementById("subject-error").innerHTML="valid";
//      document.getElementById("subject-error").style.visibility="visible";
//      document.getElementById("subject-error").style.color="green";
//      return true;
//     }
//  };


// function validateMessage() {
//     var val = document.getElementById("cmessage").value;
//     console.log(val);
//     var v = null;
//     v = val.trim();
//     document.getElementById("cmessage").value = v;
//     var n = v.length;
//     console.log(n);
//     if (v == "" || val == null) {
//         document.getElementById("message-error").style.color = "red";
//         document.getElementById("message-error").innerHTML = "**This field must be filled out";
//         return false;
//    }
//     if (n < 20) {
//         document.getElementById("message-error").style.color = "red";
//         document.getElementById("message-error").innerHTML = "**Message should be atleast 10 letters long";
//         return false;


//     }
//     document.getElementById("message-error").style.color = "green";
//     document.getElementById("message-error").innerHTML = "Valid";
//     return true;

// };


// function validateForm() {
//     if (!validateEmail() || !validateName() || !validateMessage() || !validateSubject()) {
//         submitError.style.display='block';
//         submitError.innerHTML='Please fix error to submit';
//         setTimeout(function(){submitError.style.display='none';},3000);
//         alert("Please fix the error to submit")
//         return  false;    
//     }
// }


function validateName() {
    nameInput = document.getElementById('cname')
    var name = nameInput.value;
    const regex = /^[A-Za-z\s\.]+$/;
    console.log(name);

    if (name.length == 0) {
        document.getElementById("name-error").style.color = "red";
        document.getElementById("name-error").innerHTML = "Name Can not be empty";
        return false;
    } 
    else if (!regex.test(name)) {
        document.getElementById("name-error").style.color = "red";
        document.getElementById("name-error").innerHTML = "Enter a valid name";
        return false;
    }

    document.getElementById("name-error").style.color = "green";
    document.getElementById("name-error").innerHTML = "Valid"

       return true;

}

function validateEmail() {

    var val = document.getElementById("cemail").value;
    var v = null;
    v = val.trim();
    document.getElementById("cemail").value = v;
    if (v == "" || val == null) {
        document.getElementById("mail-error").style.color = "red";
        document.getElementById("mail-error").innerHTML = "Email can not be empty";
        return false;
     } 
    
     else if (!/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})(.[a-z]{2,8})?$/.test(v)) {
        document.getElementById("mail-error").style.color = "red";
        document.getElementById("mail-error").innerHTML = " Invalid email format";
        return false;
     }
    
    document.getElementById("mail-error").style.color = "green";
    document.getElementById("mail-error").innerHTML = "Valid";
    return true;
}
function validateSubject() {
    var val1 = document.getElementById("csubject").value;
    console.log(val1);
    var v1 = null;
    v1 = val1.trim();
    document.getElementById("csubject").value = v1;
    if (v1 == "" || val1 == null) {
        document.getElementById("subject-error").style.color = "red";
        document.getElementById("subject-error").innerHTML = "Subject can not be empty";
        return false;
    }

    document.getElementById("subject-error").style.color = "green";
    document.getElementById("subject-error").innerHTML = "Valid";
    return true;
    
}



function validateMessage() {
    var val2 = document.getElementById("cmessage").value;
    console.log(val2);
    var v2 = null;
    v2 = val2.trim();
    document.getElementById("cmessage").value = v2;
   
    var n = v2.length;
    console.log(n);
    
    if (v2 == "" || val2 == null) {
        document.getElementById("message-error").style.color = "red";
        document.getElementById("message-error").innerHTML = "Message can not be empty";
        return false;

    }
    if (n < 10) {
        document.getElementById("message-error").style.color = "red";
        document.getElementById("message-error").innerHTML = "Message should be atleast 10 letters long";
        return false;


    }
    document.getElementById("message-error").style.color = "green";
    document.getElementById("message-error").innerHTML = "Valid";
    return true;

}


function validateForm() {
    if (!validateEmail() || !validateName() || !validateMessage() || !validateSubject()) {
        // submitError.style.display='block';
        // submitError.innerHTML='Please fix error to submit';
        // setTimeout(function(){submitError.style.display='none';},3000);
        alert("Please fix the error to submit")
        return  false;    
    }
    else{
        document.contact-form.reset();
        return true;
    }
}