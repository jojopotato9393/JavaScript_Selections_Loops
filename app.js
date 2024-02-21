console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <= 100; i++)
{
    if(i % 2 === 0)
    {
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 1; i <= 100; i++)
if(i % 3===0 && i % 5===0)
{
    console.log("FizzBuzz");
}
else if(i % 3===0)
{
console.log("Fizz");
}
else if(i % 5===0)
{
console.log("Buzz");
}


console.log("while loop");
let i = 1;
while (i <= 100)
{
    if(i % 2 === 0)
    {
        i++;      
        continue; 
    }
    console.log(i);
    i++;
    
}
 
let num = 1;
do{ 
    
    if(num % 3===0 && num % 5===0)
    {
        console.log("FizzBuzz");
    }
    else if(num % 3===0)
    {
    console.log("Fizz");
    }
    else if(num % 5===0)
    {
    console.log("Buzz");
    }
   
    num++
}while(num <= 100);

let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 
let found = false; 

for (let i = 1; i <= n; i++) {
    if (i === value) {
        console.log("Found value!");
        found = true; 
        break; 
    }
}

if (!found) {
    
    console.log("Did not find value");
}

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n1 = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n; i++) {
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
        console.log("FizzBuzz");
    } else if (i % fizzDivisor === 0) {
        console.log("Fizz");
    } else if (i % buzzDivisor === 0) {
        console.log("Buzz");
    }
}