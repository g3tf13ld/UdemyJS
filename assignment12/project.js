document.getElementById("h1").innerHTML = "Welcome to my site!"

var myName = "Pavel"
document.getElementById("p1").innerHTML = "My name is " + myName

var elToRemove = document.getElementsByTagName("h1")[1]
document.getElementById("main").removeChild(elToRemove)

var p2 = document.getElementById("p2")
p2.style.color = "blue"

p2.innerHTML = "I love JavaScript"