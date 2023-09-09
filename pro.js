// console.log(console)
// document.getElementsByTagName("nav")[0].style.color = "cyan"


// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "yellow"
// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
// document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

// let elem = document.getElementById("click").style.color = "red"
// console.log(elem)



// // [---settimeout-function---]
// const sum = (a,b) =>{
//     console.log(a+b)
// }
// setTimeout(sum, 5000, 10,20)



document.getElementById("google").addEventListener("click", function(){
    var url = "https://google.com/search?q=youtube.com";
var win = window.open(url);
win.focus();

})