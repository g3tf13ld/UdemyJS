function b1Click(){
    document.getElementById("p1").innerHTML = "Button 1 was clicked"
    alert("Button 1 was clicked")
}

function i1Change(){
    var i1 = document.getElementById("i1")
    document.getElementById("p2").innerHTML = "Characters typed " + i1.value.length
}

document.getElementById("b2").addEventListener("click", b2Click)

function b2Click(){
    var p3 = document.getElementById("p3")
    document.getElementById("body").removeChild(p3)
}

var i2 = document.getElementById("i2")
i2.addEventListener("change", i2Change)

function i2Change(){
    document.getElementById("p4").style.fontSize = i2.value.length + 12 + "pt"
}