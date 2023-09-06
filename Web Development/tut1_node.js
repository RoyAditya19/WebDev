console.log("this is a tutorial");


//let namess = "harry";                   
//console.log(namess + "is a good boy");                  //if suppose there are thousand people's, then you have the write the same line of code for 1000 times. so for saving time and space we use functions here


function greet(name, greettext)
{
    let names1 = "name1";                    //this name has no effect outside this function, it's use is only inside the function. as u can see there's "name1" declared outside this function but it is not getting affected by the "name1" declared inside the function
    console.log(greettext + "" + name);
    console.log(name + " is a good boy");

   // return 0;         --> not required here. used for explaining purpose.
   // if you write anything after the return then it will not be executed bcz a function is ended as soon as it encounters return statement
}

let names = "harry";
let names1 = "rohan";
let names2 = "sohan";
let names3 = "raj";

let greettext = "Good Morning!";
let greettext1 = "Good Afternoon!";
let greettext2 = "Good Evening!";
let greettext3 = "Good Night!";

greet(names, greettext);
greet(names1, greettext1);
greet(names2,greettext2);
greet(names3,greettext3);



