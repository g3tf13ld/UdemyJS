function Person(first, last){
    this.firstName = first
    this.lastName = last
    this.myName = function() {
        console.log(this.firstName + " " + this.lastName)
    }
}