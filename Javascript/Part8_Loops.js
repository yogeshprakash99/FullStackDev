/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop
var i = 0;
// While Loop
while(i<5)
{
    console.log("Hello");
    i++
}

// For Loop
for(i = 0;i < 5;i++)
{
    console.log("Hello w For loop");
}



/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop
var num = 1;
// METHOD ONE
// While Loop
while(num<25)
{
    if(num%2!=0)
    {
        console.log(num);
    }
    num++;
}
// METHOD TWO
// For Loop
for(num = 0; num < 25; num++)
{
    if(num%2!=0)
    {
        console.log(num)
    }
}
