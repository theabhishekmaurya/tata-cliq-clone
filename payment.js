document.querySelector("button").addEventListener("click", check_details);
function check_details() {
  var card_nbr = document.querySelector("#card_nbr").value;
  var exp_mon = document.querySelector("#expiry_month").value;
  var exp_year = document.querySelector("#expiry_year").value;
  var name_on = document.querySelector("#name").value;
  var cvv = document.querySelector("#cvv").value;
  if (
    card_nbr.length == 0 ||
    exp_mon.length == 0 ||
    exp_year.length == 0 ||
    name_on.length == 0 ||
    cvv.length == 0
  ) {
    alert("enter all details,all fileds are mandatory");
  } else {
    if (cvv.length == 3 && card_nbr.length == 12) {
      window.location.href = "thank_you.html";
    } else {
      alert("Invalid card details...");
    }
    // card_nbr = "";
    document.querySelector("#card_nbr").value = "";
    document.querySelector("#expiry_month").value = "";
    document.querySelector("#expiry_year").value = "";
    document.querySelector("#name").value = "";
    document.querySelector("#cvv").value = "";
  }
}
var data = JSON.parse(localStorage.getItem("cart_history"))
// console.log(data);
var bag_total = 0;
var discount = 0;
data.map(function (elem) {
    bag_total += Number(elem.oldPrice);
    discount+=Number(elem.oldPrice)-Number(elem.Newprice)

})
var payable = bag_total - discount
// console.log(payable);
// console.log(discount);
// console.log(bag_total);
document.querySelector("#bag_total").textContent = "₹" + bag_total+".00";
document.querySelector("#bag_sub_total").textContent = "₹" + bag_total+".00";
document.querySelector("#dis_price").textContent = "-₹" + discount+".00";
document.querySelector("#payable").textContent = "₹" + payable+".00";


var add = JSON.parse(localStorage.getItem("userdata"));
document.querySelector("#homeAdd").textContent=add[0].address;