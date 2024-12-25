// Write a JavaScript function that prints numbers from 1 to 100. But for:
//Multiples of 3, print "Fizz" instead of the number.
//Multiples of 5, print "Buzz"
//For numbers which are multiples of both 3 and 5, print "FizzBuzz"

function fizzBuzz(){
    for(let i=1;i<=100;i++){
        //console.log(i)
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz")
        }else if(i%5==0){
            console.log("Buzz")
        }else if(i%3==0){
            console.log("Fizz")
        }else{
            console.log(i)
        }
    }
}
fizzBuzz()