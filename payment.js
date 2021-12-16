

document.querySelector("button").addEventListener("click", check_details);
function check_details() {
    var card_nbr=document.querySelector('#card_nbr').value
var exp_mon = document.querySelector('#expiry_month').value;
var exp_year = document.querySelector('#expiry_year').value;
var name_on = document.querySelector('#name').value;
var cvv = document.querySelector('#cvv').value;
    if (card_nbr.length == 0 || exp_mon.length == 0 || exp_year.length == 0 || name_on.length == 0 || cvv.length == 0) {
       alert("enter all details,all fileds are mandatory")
    }
    else {
        if (cvv.length == 3 && card_nbr.length == 12) {
           window.location.href="thank_you.html" 
            
        }
        else {
            alert("Invalid card details...");
            
        }
        // card_nbr = "";
        document.querySelector('#card_nbr').value = "";
            document.querySelector('#expiry_month').value = "";
            document.querySelector('#expiry_year').value="";
            document.querySelector('#name').value = "";
            document.querySelector('#cvv').value = "";

    }
}