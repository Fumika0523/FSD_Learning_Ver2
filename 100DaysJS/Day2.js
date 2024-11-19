//Write a JavaScript function that checks if a given number is prime or not
//JavaScript function           >> isPrime()
//given number is prime or not  >> no > divisible by 1 and itself || 1 is not a prime number


function isPrime(number){
    console.log(number)
    if(number<=1){
        console.log(number,"-is not a prime No")
    }for(i=2;i<number;i++){
        if(number%i==0){
            console.log(number,"-is not a prime No")
            return false
        }
    }
    console.log(number,"-is a prime No")
}
isPrime(7)
isPrime(10)