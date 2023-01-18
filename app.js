
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


function validateName() {
   var text=document.getElementById("cname").value;
   var regex1 = /^[A-Za-z]+$/;  

   if(text == ""){
    document.getElementById("name-error").innerHTML="**Name Can not be Empty";
    document.getElementById("name-error").style.visibility="visible";
    document.getElementById("name-error").style.color="red";
   }
   if(regex1.test(text)){
    document.getElementById("name-error").innerHTML="valid";
    document.getElementById("name-error").style.visibility="visible";
    document.getElementById("name-error").style.color="green";
   }
};

function validateEmail() {
  var emailtext = document.getElementById("cemail").value;
  var regex2 =/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})(.[a-z]{2,8})?$/ ;


  if(regex2.test(emailtext)) {
    document.getElementById("mail-error").innerHTML="valid";
    document.getElementById("mail-error").style.visibility="visible";
    document.getElementById("mail-error").style.color="green";
 }
 else{
    document.getElementById("mail-error").innerHTML="**invalid email";
    document.getElementById("mail-error").style.visibility="visible";
    document.getElementById("mail-error").style.color="red";
 }
};

function validateSubject() {
    var subtext=document.getElementById("csubject").value;
    var regex3 = /^[A-Za-z]+$/;  
 
    if(subtext == ""){
     document.getElementById("subject-error").innerHTML="**Subject Can not be Empty";
     document.getElementById("subject-error").style.visibility="visible";
     document.getElementById("subject-error").style.color="red";
    }
    if(regex3.test(subtext)){
     document.getElementById("subject-error").innerHTML="valid";
     document.getElementById("subject-error").style.visibility="visible";
     document.getElementById("subject-error").style.color="green";
    }
 };


function validateMessage() {
    var val = document.getElementById("cmessage").value;
    console.log(val);
    var v = null;
    v = val.trim();
    document.getElementById("cmessage").value = v;
    var n = v.length;
    console.log(n);
    if (v == "" || val == null) {
        document.getElementById("message-error").style.color = "red";
        document.getElementById("message-error").innerHTML = "**This field must be filled out";
        return false;
   }
    if (n < 20) {
        document.getElementById("message-error").style.color = "red";
        document.getElementById("message-error").innerHTML = "**Message should be atleast 10 letters long";
        return false;


    }
    document.getElementById("message-error").style.color = "green";
    document.getElementById("message-error").innerHTML = "Valid";
    return true;

};


function validateForm() {
    if (!validateEmail() || !validateName() || !validateMessage() || !validateSubject()) {
        submitError.style.display='block';
        submitError.innerHTML='Please fix error to submit';
        setTimeout(function(){submitError.style.display='none';},3000);
        alert("Please fix the error to submit")
        return  false;    
    }
}