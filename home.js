document.querySelector("#categories").addEventListener("mouseover",function(){
    document.querySelector("#category").style.display="flex";
})

document.querySelector("#category").addEventListener("mouseover",function(){
    document.querySelector("#category").style.display="flex";
})
document.querySelector("#category").addEventListener("mouseout",function(){
    document.querySelector("#category").style.display="none";
})
document.querySelector("#categories").addEventListener("mouseout",function(){
    document.querySelector("#category").style.display="none";
})

document.querySelector("#brands").addEventListener("mouseover",function(){
    document.querySelector("#brand").style.display="flex";
})

document.querySelector("#brand").addEventListener("mouseover",function(){
    document.querySelector("#brand").style.display="flex";
})
document.querySelector("#brand").addEventListener("mouseout",function(){
    document.querySelector("#brand").style.display="none";
})
document.querySelector("#brands").addEventListener("mouseout",function(){
    document.querySelector("#brand").style.display="none";
})


document.querySelector("#signin_up").addEventListener("mouseover", function(){
    document.querySelector(".signup").style.display="grid"
})
document.querySelector("#signin_up").addEventListener("mouseout", function(){
    document.querySelector(".signup").style.display="none"
})
document.querySelector(".signup").addEventListener("mouseover", function(){
    document.querySelector(".signup").style.display="grid"
})
document.querySelector(".signup").addEventListener("mouseout", function(){
    document.querySelector(".signup").style.display="none"
})
document.querySelector("#loginbtn").addEventListener("click",function(){
    window.location.href="login_register.html"
})