function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

const BMIChallenge = weight / (height*2 / 100); 


alert (`your bmi is ${BMIChallenge}`);

if (BMIChallenge < 18.5) { 
  alert ( "Underweight")
}

else if(BMIChallenge >=  18.5 && BMIChallenge <= 24.9) {
 alert (' Healthy Weight') 

}

else if(BMIChallenge >=  25.0 && BMIChallenge <= 29.9) {
  alert (' Overweight') 
 
 }

 else if(BMIChallenge >=  30.0) {
  alert (' Above Obesity') 
 
 }
  
 if ( age >= 19 && age <= 24 && BMIChallenge >= 19 && BMIChallenge <= 24 ){

  alert ('Healthy')
 }

  else if ( age >= 25 && age <= 34 && BMIChallenge >= 20 && BMIChallenge <= 25 ) {
    alert ('Healthy')

  }

  else if ( age >= 35 && age <= 44 && BMIChallenge >= 21 && BMIChallenge <= 26 ) {
    alert ('Healthy')
    
  }

  else if ( age >= 45 && age <= 54 && BMIChallenge >= 22 && BMIChallenge <= 27 ) {
    alert ('Healthy')
    
  }

  else if ( age >= 55 && age <= 64 && BMIChallenge >= 23 && BMIChallenge <= 28 ) {
    alert ('Healthy')
    
  }

  else if ( age >= 65 && BMIChallenge >= 24 && BMIChallenge <= 29 ) {
    alert ('Healthy')
    
  }

  else{
    alert ('Not Healthy')

  }
}




