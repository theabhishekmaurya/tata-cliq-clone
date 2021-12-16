document.querySelector("#my_account").addEventListener("click",function(){
    window.location.href="myaccount.html";
})
var products=JSON.parse(localStorage.getItem("cart_history")) || [];
var item=document.querySelector("#itemcontainer");

products.map(function(){
    var itemClone=item.cloneNode(true);
    itemClone.style.display="flex"
    itemClone.style.position="relative"
    document.querySelector("#itemdiv").append(itemClone)
})
