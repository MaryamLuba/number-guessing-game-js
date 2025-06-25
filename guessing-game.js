let Max = Number(prompt("Enter the maximum number you wanna play with"));


 let random = Math.floor(Math.random()*Max)+1;
 console.log(random);

let guess = prompt(`Enter the number between 1 and ${Max} ,or type quit to stop.`);

 

 while( true){
      if (guess ==  "quit"){
        console.log("Game is quitting!");
        break;
       }

let numGuess =  Number(guess);

if(  numGuess  == random )
 {
    console.log(" 🎉HURRAY!It was a super guess!!");
    break;
 }
 else if ( numGuess < random){
    guess = prompt("Hint: Too small! Please try again, or type quit to stop.");
 }
 else
 {
    guess = prompt("Hint: Too Large! Please try again, or type quit to stop.");
 }

  
} 