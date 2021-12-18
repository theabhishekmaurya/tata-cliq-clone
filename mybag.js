document.querySelector("#my_account").addEventListener("click",function(){
    window.location.href="myaccount.html";
})
var products=JSON.parse(localStorage.getItem("cart_history")) || [];
var item=document.querySelector("#itemcontainer");

for(let i=0; i<products.length; i++){
    if(i===0){
        var prodimg=document.querySelector(".prodimg");
        prodimg.setAttribute("src",products[i].img)
        var prodname=document.querySelector("#prodname");
        prodname.textContent=products[i].title
        var prodprice=document.querySelector("#prodnewprice");
        prodprice.textContent="₹"+products[i].Newprice
        var prodsprice=document.querySelector("strike");
        prodsprice.textContent="₹"+products[i].oldPrice
        var prodcat=document.querySelector("#prodcat");
        prodcat.textContent=products[i].product    
        
    }  
    else{
        var itemClone=item.cloneNode(true);    
        var prodimg=document.querySelector(".prodimg");
        prodimg.setAttribute("src",products[i].img)
        var prodname=document.querySelector("#prodname");
        prodname.textContent=products[i].title
        var prodprice=document.querySelector("#prodnewprice");
        prodprice.textContent="₹"+products[i].Newprice
        var prodsprice=document.querySelector("strike");
        prodsprice.textContent="₹"+products[i].oldPrice
        var prodcat=document.querySelector("#prodcat");
        prodcat.textContent=products[i].product    
        itemClone.style.display="flex"
        itemClone.style.position="relative"
        document.querySelector("#itemdiv").append(itemClone)
    }
}

var itemClone=item.cloneNode(true);    
var prodimg=document.querySelector(".prodimg");
prodimg.setAttribute("src",products[products.length-1].img)
var prodname=document.querySelector("#prodname");
prodname.textContent=products[products.length-1].title
var prodprice=document.querySelector("#prodnewprice");
prodprice.textContent="₹"+products[products.length-1].Newprice
var prodsprice=document.querySelector("strike");
prodsprice.textContent="₹"+products[products.length-1].oldPrice
var prodcat=document.querySelector("#prodcat");
prodcat.textContent=products[products.length-1].product    
itemClone.style.display="flex"
itemClone.style.position="relative"
document.querySelector("#itemdiv").append(itemClone)

var oldprice=0,newwprice=0,discprice=0;
for(let i=0; i<products.length; i++){
    let old=+products[i].oldPrice;
    let newp=+products[i].Newprice;
    oldprice+=old;
    newwprice+=newp;
    discprice=oldprice-newwprice;
}

document.querySelector(".totalprice").textContent=oldprice
document.querySelector(".discountprice").textContent=discprice
document.querySelector(".totalprice2").textContent=oldprice
document.querySelector(".discountprice2").textContent=discprice
document.querySelector("#amount").textContent=oldprice-discprice;

document.querySelector("#checkOut").addEventListener("click",function(){
    window.location.href="onlybox.html"
})
var add=JSON.parse(localStorage.getItem("userdata"));
document.querySelector("#address").textContent=add[add.length-1].address

document.querySelector("#clear").addEventListener("click",function(){
  localStorage.removeItem("cart_history");
  var products=JSON.parse(localStorage.getItem("cart_history")) || [];
  var oldprice=0,newwprice=0,discprice=0;
    for(let i=0; i<products.length; i++){
    let old=+products[i].oldPrice;
    let newp=+products[i].Newprice;
    oldprice+=old;
    newwprice+=newp;
    discprice=oldprice-newwprice;
}

document.querySelector(".totalprice").textContent=oldprice
document.querySelector(".discountprice").textContent=discprice
document.querySelector(".totalprice2").textContent=oldprice
document.querySelector(".discountprice2").textContent=discprice
document.querySelector("#amount").textContent=oldprice-discprice;

  window.location.href="mybag.html";
})