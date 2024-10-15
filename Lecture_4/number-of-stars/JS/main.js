  // Declare variables
  let numberOfStars = 0;
  let outputStars = '';

  // inputs
  numberOfStars = prompt("Enter the number of stars?");

 // loop
  for (let i=0; i < numberOfStars; i++ ) {
    outputStars += "*";
 }
 
 // output 
 alert("Outputting " + numberOfStars + " stars: " + outputStars)

   // check that user entered a number and that it is greater than zero
  // otherwise ask user to enter another number
  while (isNaN(numberOfStars) || numberOfStars <=0) {
    alert("You did not enter a number greater than zero.");
    numberOfStars = prompt("Enter a number greater than zero?");
  }
  function factorial() { 
    // declare variables
    let number = 0;
    let factorial = 1;
    let output = "";
  
  }
  
  factorial();

    // input
    number = parseInt(prompt("Enter a number between 1 and 20"));
    while ( isNaN(number) || number <= 1 || number >= 20) {
      number = parseInt(prompt("Please enter a number between 1 and 20"));
    }
    output = "Factorials up to " + number + ": ";
    // calculate factorials
    for (let j=number; j >= 1; j--) { // outer loop
      factorial = 1;
      for (let i=1; i <= j; i++) { // inner loop
        factorial *= i;
      }
      output += j + '! = ' + factorial + ', ';
    }
  // output factorials
  alert(output);

  


