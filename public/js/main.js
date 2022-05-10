/*
array of imgs in page 2 
function slide show imgs*/
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


var i =0;
var slideimage=["img/999.jpg","img/qq.jpg","img/ccc.jpg"
                ,"img/5555.jpg","img/898.jpg","img/8989.jpg",
                "img/77.webp","img/44.jpg","img/123.jpg","img/56.jpg"  ];
var slideshow = function(){

document.show.src = slideimage[i];
if(i<slideimage.length-1)
{

    i++
}
else{

    i=0;
}
setTimeout("slideshow()",1000);


}
slideshow()



// Get the modal
var modal = document.getElementById('moneyx');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal

// Get the modal
var modal = document.getElementById('moneyy');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



//start cap
 



// function capa() { 
//     var namec =  
//         document.forms["capss"]["unamee"]; 
//     var  idnumbe =  
//         document.forms["capss"]["idnume"]; 
//     var phonee =  
//         document.forms["capss"]["phonee"]; 
   
//     var placec =  
//         document.forms["capss"]["placee"]; 
//     var colorss=  
//         document.forms["capss"]["colorse"]; 
//     var addresss =  
//         document.forms["capss"]["Addresse"]; 

//     if (namec.value == "") { 
//         window.alert("Please enter your name."); 
//         name.focus(); 
//         return false; 
//     } 

//     if (addresss.value == "") { 
//         window.alert("Please enter your address."); 
//         address.focus(); 
//         return false; 
//     } 

//     if (  idnumbe.value == "") { 
//         window.alert( 
//           "please enter random id number not forget it please."); 
//        idnumb.focus(); 
//         return false; 
//     } 

//     if (phonee.value == "") { 
//         window.alert( 
//           "Please enter your telephone number."); 
//         phone.focus(); 
//         return false; 
//     } 

    
//     if (colorss.selectedIndex < 1) { 
//         alert("Please select color."); 
//         what.focus(); 
//         return false; 
//     } 
//     if (placec.selectedIndex < 1) { 
//         alert("Please enter place of lost."); 
//         what.focus(); 
//         return false; 
//     } 

//     return true; 
// } 

















// function money1() { 
//     var name =  
//         document.forms["money"]["uname"]; 
//     var  idnumb =  
//         document.forms["money"]["idnum"]; 
//     var phone =  
//         document.forms["money"]["phone"]; 
//     var nummony =  
//         document.forms["money"]["nummoney"]; 
//     var placem =  
//         document.forms["money"]["place"]; 
   
//     var address =  
//         document.forms["money"]["Address"]; 

//     if (name.value == "") { 
//         window.alert("Please enter your name."); 
//         name.focus(); 
//         return false; 
//     } 

//     if (address.value == "") { 
//         window.alert("Please enter your address."); 
//         address.focus(); 
//         return false; 
//     } 

//     if (  idnumb.value == "") { 
//         window.alert( 
//           "please enter random id number not forget it please."); 
//        idnumb.focus(); 
//         return false; 
//     } 

//     if (phone.value == "") { 
//         window.alert( 
//           "Please enter your telephone number."); 
//         phone.focus(); 
//         return false; 
//     } 

    
//     if (what.selectedIndex < 1) { 
//         alert("Please enter place of lost."); 
//         what.focus(); 
//         return false; 
//     } 

//     return true; 
// } 



// Get the modal


var modal = document.getElementById('bag');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var modal = document.getElementById('bagy');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// Get the modal
var modal = document.getElementById('capx');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById('capy');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var modal = document.getElementById('walletx');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var modal = document.getElementById('wallety');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modal = document.getElementById('keyx');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var modal = document.getElementById('keyy');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var modal = document.getElementById('moby');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modal = document.getElementById('mobx');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}










function onlyNumberKey(evt) { 
          
    // Only ASCII charactar in that range allowed 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 
        return false; 
    return true; 
} 

function formm() { 
    var name =  
        document.forms["RegForm"]["Name"]; 
    var email =  
        document.forms["RegForm"]["EMail"]; 
    var phone =  
        document.forms["RegForm"]["Telephone"]; 
    var what =  
        document.forms["RegForm"]["Subject"]; 
    var password =  
        document.forms["RegForm"]["Password"]; 
    var address =  
        document.forms["RegForm"]["Address"]; 

    if (name.value == "") { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 

    if (address.value == "") { 
        window.alert("Please enter your address."); 
        address.focus(); 
        return false; 
    } 

    if (email.value == "") { 
        window.alert( 
          "Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    if (phone.value == "") { 
        window.alert( 
          "Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 

    if (password.value == "") { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 

    if (what.selectedIndex < 1) { 
        alert("Please enter your course."); 
        what.focus(); 
        return false; 
    } 

    return true; 
} 



function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }