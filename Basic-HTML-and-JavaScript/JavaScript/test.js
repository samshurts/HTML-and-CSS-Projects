class rectangle {
    constructor(height, width) {
    this.height = height;
    this.width = width;
    this.area = height * width;
    }
}

var rec1 = new rectangle(5, 7);
var rec2 = new rectangle(3, 2);
var rec3 = new rectangle(8, 6);

document.getElementById("display").innerHTML = "The area of rectangle #1 is " + rec1.area + ".";
document.getElementById("display2").innerHTML = "The area of rectangle #2 is " + rec2.area + ".";
document.getElementById("display3").innerHTML = "The area of rectangle #3 is " + rec3.area + ".";