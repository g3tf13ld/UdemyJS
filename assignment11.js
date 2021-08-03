function RandomNumber(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min)) + min
}

console.log(RandomNumber(0, 10))
console.log(RandomNumber(10, 30))
console.log(RandomNumber(-5, 5))