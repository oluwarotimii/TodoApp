// loops are statement that continue to execute a block of code
// //for loop
// for (intialization, condition, increment){
//  statement of execution
// }

for (let i = 1; i <= 10; i++){
    document.write(i + "<br>");
}

//while loop
// intialization
// while (condition) {
    //statements
    // increment
// }
 document.write("<br>")
let i = 0;
while (i<=10) {
    document.writeln(i + "<br>")
    i++;
}

//exercise
// sorting put the numbers from highest to lowest.
//a,b,c
// a,c,b
// b,c,a
// b,a,c
// c,b,a
// c,a,b
// a = 0;
// b = -1;
// c = 4;

// document.write("<br>") 
// document.write("<br>")  
// document.write("<br>")
// document.write("<br>") 

// function sort(a,b,c) {
//  if (a>b && b > c) {
//     document.writeln(a+ ", "+b + ", " + c)
// } else if (a>c && c>b) {
//     document.writeln(a+", "+c +", "+ b)
//     document.write("<br>")
// } else if (b>c && c>a) {
//     document.write(b+ ", " + c + ", "+ a)
//     document.write("<br>")
// } else if (b>a && a>c) {
//     document.write(b+", "+a + ", "+c)
//     document.write("<br>")
// } else if (c>b && b>a ) {
//     document.write(c +", " + b +", "+a)
//     document.write("<br>")
// } else {
//     document.writeln(c+", "+ a +", " + b)
//     document.write("<br>")   
// }
// }
// document.write("<br>") 
// document.write("<br>")  
// document.write("<br>")
// document.write("<br>") 
//  x = sort(0, -1 , 4)
// //  document.write(x)


 //Finding the largest of five numbers
//  a,b,c,d,e
//  b,c,d,e,a
//  c,d,e,a,b
//  d,e,a,b,c
//  e,a,b,c,d

document.write("<br>") 
document.write("<br>")  
document.write("<br>")
document.write("<br>") 

 function largestNum(a,b,c,d,e) {
     if (a>b && a>c && a>d && a>e) {
          return document.writeln( a + " is the largest number");
     } else if (b>c && b>d && b>e && b>a) {
         return document.writeln( b + " is the largest number");
     } else if (c>d && c>e && c>a && c>b) {
          return document.write(c + " is the largest number");
     } else if (d>e && d>a && d>b && d>c){
       return document.write(d + " is the largest number");
     }else if(e>a && e>b && e>c && e>d) {
         return document.write(e + " is the largest number ");
     } else{
         document.write("Invalid")
     }
 }

 r = largestNum(-5, -3 ,-6, 2, -1)
//  document.write(r)