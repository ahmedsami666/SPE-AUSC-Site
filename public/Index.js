var hamburger = document.querySelectorAll(".hamburger")[0];
var menu = document.querySelectorAll(".menu")[0];
var btn = document.querySelectorAll(".btn");
var work = document.querySelectorAll(".work")[0];
var facebook = document.querySelectorAll(".facebook")[0];
var linkedin = document.querySelectorAll(".linkedin")[0];
var instagram = document.querySelectorAll(".instagram")[0];

var counter = 0;

hamburger.addEventListener("click", function(){
    if (counter%2 === 0){
        menu.classList.add("click");
        hamburger.src = "./images/icon-close.svg"
        counter++
    } else {
        menu.classList.remove("click");
        hamburger.src = "./images/icon-hamburger.svg"
        counter++
    }
});

for (var i = 0; i < 2; i++) {
    btn[i].addEventListener("click", function(){
        window.location.href = "/Home#contact";
    })
}

work.addEventListener("click", function(){
    window.location.href = "/Activities"
})

facebook.addEventListener("click", function(){
    window.location.href = "https://www.facebook.com/SPE.Alex/"
});

instagram.addEventListener("click", function(){
    window.location.href = "https://www.instagram.com/spe_alexandria/"
});

linkedin.addEventListener("click", function(){
    window.location.href = "https://www.linkedin.com/company/spe-alex/"
})