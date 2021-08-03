// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array
const colors = ["orange", "black", "pink", "blue", "green", "purple"]

// Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
const names =
[
    {
        firstName: "John",
        lastName: "Lennon"
    },
    {
        firstName: "Paul",
        lastName: "McCartney"
    },
    {
        firstName: "George",
        lastName: "Harrison"
    },
    {
        firstName: "Ringo",
        lastName: "Starr"
    }
]

btn1 = document.getElementById("btn1")
btn1.addEventListener("click", btn1Click)

function btn1Click(){
    document.getElementById("p1").innerHTML = RandomNumber(1, 100)
}

function RandomNumber(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min)) + min
}

btn2 = document.getElementById("btn2")
btn2.addEventListener("click", btn2Click)

function btn2Click(){
    min = Number.parseInt(document.getElementById("i1").value)
    max = Number.parseInt(document.getElementById("i2").value)
    document.getElementById("p2").innerHTML = RandomNumber(min, max)
}

btn3 = document.getElementById("btn3")
btn3.addEventListener("click", btn3Click)

function btn3Click(){
    document.getElementById("p3").innerHTML = lorem
}

btn4 = document.getElementById("btn4")
btn4.addEventListener("click", btn4Click)

function btn4Click(){
    var number = Number.parseInt( document.getElementById("i4").value)
    var loremSentences = lorem.split(".")
    var newLorem = ""

    for (var i = 0; i < number; i++) {
        newLorem = newLorem + loremSentences[i] + "."
    }

    document.getElementById("p4").innerHTML = newLorem
}

btn5 = document.getElementById("btn5")
btn5.addEventListener("click", btn5Click)

function btn5Click(){
    var number = document.getElementById("i5").value.length
    document.getElementById("p5").innerHTML = lorem.repeat(number)
}

btn6 = document.getElementById("btn6")
btn6.addEventListener("click", btn6Click)

function btn6Click() {
    var myDate = new Date()
    var year = myDate.getFullYear()
    var month = myDate.getMonth() + 1
    var day = myDate.getDate()
    var newMyDate = day + "." + month + "." + year
    document.getElementById("p6").innerHTML = newMyDate
}

btn7 = document.getElementById("btn7")
btn7.addEventListener("click", btn7Click)

function btn7Click() {
    var myTime = new Date()
    var hours = myTime.getHours()
    var minutes = myTime.getMinutes()
    var ampm

    if (hours >= 12) {
        ampm = "PM"
    } else {
        ampm = "AM"
    }

    if (hours > 12) {
        hours = hours - 12
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    var newMyTime = hours + ":" + minutes + " " + ampm
    document.getElementById("p7").innerHTML = newMyTime
}

btn8 = document.getElementById("btn8")
btn8.addEventListener("click", btn8Click)

// Convert Inches to Feet.
function btn8Click() {
    var inches = document.getElementById("i8").value
    var convertedFeets = inches / 12 + " " + "FT"

    document.getElementById("p8").innerHTML = convertedFeets
}

btn9 = document.getElementById("btn9")
btn9.addEventListener("click", btn9Click)

// Converts Feet to Inches.
function btn9Click() {
    var feets = document.getElementById("i9").value
    var convertedInches = feets * 12 + " " + "Inches"

    document.getElementById("p9").innerHTML = convertedInches
}

btn10 = document.getElementById("btn10")
btn10.addEventListener("click", btn10Click)

// Compares if two string has the same length.
function btn10Click() {
    var string1 = document.getElementById("string1").value
    var string2 = document.getElementById("string2").value

    if (string1.length == string2.length) {
        outp = "Entered strings has the same length."
    } else {
        outp = "Entered strings has different length."
    }

    document.getElementById("p10").innerHTML = outp
}

btn11 = document.getElementById("btn11")
btn11.addEventListener("click", btn11Click)

function btn11Click(){
    document.getElementById("p11").innerHTML = passwordGenerator()
}

// Password generator.
function passwordGenerator() {
    var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

    var password = ""
    var pswLength = 12

    for (var i = 0; i <= pswLength; i++) {
        var num = RandomNumber(0, chars.length)

        password += chars[num]
    }

    return password
}

btn12 = document.getElementById("btn12")
btn12.addEventListener("click", btn12Click)

// IsEven.
function btn12Click() {
    var number = Number.parseInt(document.getElementById("i12").value) 

    if (number % 2 == 0) {
        newMsg = number + " is even."
    } else {
        newMsg = number + " is odd."
    }

    document.getElementById("p12").innerHTML = newMsg
}

btn13 = document.getElementById("btn13")
btn13.addEventListener("click", btn13Click)

// Random color.
function btn13Click() {
    var color = colors[RandomNumber(0, colors.length)]

    document.getElementById("p13").innerHTML = color
}

btn14 = document.getElementById("btn14")
btn14.addEventListener("click", btn14Click)

// Random first and last name.
function btn14Click() {
    var name = names[RandomNumber(0, names.length)]

    document.getElementById("p14").innerHTML = name.firstName + " " + name.lastName
}
