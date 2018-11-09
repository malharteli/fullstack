/*
This code will return i every 1.000, 1.1, and 1.2 seconds.
The error here is the i will equal 3, as the forloop will have completed before running the alert.
*/
for (var i =0; i<3; i++){
  setTimeout(function() {alert(i);}, 1000+i);
}

/*
This counters the above error by making the i that is returned into a local variable
*/

for(var i = 0; i < 3; i++){
  setTimeout(function(i_local){
    return function(){alert(i_local);}
  }(i), 1000+i);
}



var addSix = createBase(6);
addSix(10);
addSix(21);

/*
For this scenario, you need to create a createBase function that contains a generic function to run when addSix feeds it a variable
*/

//This will account for the createBase called in the problem above
function createBase(baseNumber){
  //This will run when createBase, which already ran when var addSix was declared, received a new variable.
  function (N){
    //This allows us to call the baseNumber from the createBase function creation delcaration
    return baseNumber + N;
  }
}

/*
For private variables, they need to be contained within the function produced, and a helper function to access it.
*/

//For the private variable, you don't need to declare a variable in the function declaration. Since its enclosed, there's no need.
function privateCounter(){
  var private_Counter = 0;
  return{
    //declares the add function, which allows user to modify the private counter
    add: function(addNum){private_Counter += increment; },
    retrieve: function() {return 'counter equals ' + private_Counter; }
  }
}

/*
Check if input is an integer
*/
function checkInt(n){
  if (int %1 === 0){
    return true;
  } else return false;
}


/*
question2
Following code will return variable b to the console log
*/

(function(){var a = b = 5;})();

//following console.log will return 5. b is a global variable, as it is not var that was declared within the function.
console.log(b);


//Closure Test
function multiply(x){
  //this function runs when the multiply function receives an additional variable call, hence the lack of name.
  function (y){
    return x * y;
  }
}
//write code that will let you execute the following
multiply(5)(6);

//Bind function
//

//use strict
//"Use strict" enforces safer code by throwing an error when the function attached creates a global variable by mistake

//== checks for equality, even amongst different types
//=== checks for equality and type, a more exact match.
//examples:
"1" == 1 //true
"1" === 1 // false


//Add your own method to the array object to make the following code work
Array.prototype.average = function(){
  //calculate the sum
  var sum = this.reduce((prev, cur) => prev + cur);
  return sum/this.length;
}

var arr = [1, 2, 3, 4, 5];
var avg = arr.average();
console.log(avg);


//callback functions are functions that are received like another function's variables. It can be executed following some execution.


0.1 + 0.2 === 0.3; // would return false due to floating point errors


//NonRepeatingCharacter

function NonrepeatingCharacter(str) {

  // code goes here
  var ans;
  var paraArray = str.split('').filter(function(c,i,a){
     if (a.lastIndexOf(c) == a.indexOf(c)){
         return c;
     }
  });
  return paraArray[0];
}

// keep this function call here
NonrepeatingCharacter(readline());

//Letter Changing

function LetterChanges(str) {
    var alphaArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var vowArray = ['a', 'e','i','o','u'];
    function shiftLetterFunc(c){
        if(alphaArray.indexOf(c)>-1){
        if (c== 'z'){
            return alphaArray[0];
        } else
        return alphaArray[alphaArray.indexOf(c) +1];
    } else return c;
    }
    function switchVowel(c){
        if (vowArray.indexOf(c) > -1){
            return c.toUpperCase();
        } else
        return c;
    }
  // code goes here
  return str.split('').map(c => shiftLetterFunc(c)).map(c => switchVowel(c)).join('');

}

// keep this function call here
LetterChanges(readline());

//b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~
//b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~


//Insert data into a DOM element
window.addEventListener("DOMContentLoaded", function(evt){
  var elem = document.getElementById("content");
  var para = document.createElement("p");
  var text = document.createTextNode("The page just loaded.");
  para.appendChild(text);
  elem.appendChild(elem);
})

//alternating Merge two strings from a single base strings
function StringMerge(str) {
    var strArray = str.split("*");
    var arrayA = strArray[0].split("");
    var arrayB = strArray[1].split("");
    var finalArr = [];
    for(i=0; i<arrayA.length;i++){
        finalArr.push(arrayA[i]);
        finalArr.push(arrayB[i]);
    }
  // code goes here
  return finalArr.join("");

}

// keep this function call here
StringMerge(readline());
