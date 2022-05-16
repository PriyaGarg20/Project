 /*offer section pop-up*/
          setTimeout(display,2000)
        var a=document.getElementById("offer");
        function display() { 
            offer.style.display="block"};
        
        function undisplay() {
            offer.style.display="none"};
        /*on submit form*/
document.getElementById("btn2").addEventListener("click",submit)
function submit(){alert("Thanks for contacting us.  We will get in touch with you soon..")};
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
