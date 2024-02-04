// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
let driverName = "Kalvian-1";
// 1.2 Print `"The driver's name is XXXX"`.
console.log("The driver's name is " + driverName);
// 1.3 Create a variable `Kalvian-2` with the navigator's name
let navigatorName = "Kalvian-2";
// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is " + navigatorName);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
let driverNameLength = driverName.length;
let navigatorNameLength = navigatorName.length;

if (driverNameLength > navigatorNameLength) {
    console.log("The driver has the longest name, it has " + driverNameLength + " characters.");
} else if (driverNameLength < navigatorNameLength) {
    console.log("It seems that the navigator has the longest name, it has " + navigatorNameLength + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + driverNameLength + " characters!");
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 

function printVowelsAndIndexes(name) {
  let vowels = "";
  let vowelIndexes = "";

  for (let i = 0; i < name.length; i++) {
      let char = name[i].toLowerCase();
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
          vowels += name[i] + " ";
          vowelIndexes += (i + 1) + " ";
      }
  }

  if (vowels === "") {
      console.log("No vowels");
  } else {
      console.log(name + " " + vowels + vowelIndexes);
  }
}
printVowelsAndIndexes(driverName);
printVowelsAndIndexes(navigatorName);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

function countUpperCaseLowerCase(name) {
  let upperCaseCount = 0;
  let lowerCaseCount = 0;

  for (let i = 0; i < name.length; i++) {
      let char = name[i];
      if (char >= 'A' && char <= 'Z') {
          upperCaseCount++;
      } else if (char >= 'a' && char <= 'z') {
          lowerCaseCount++;
      }
  }

  console.log("Number of upper case characters: " + upperCaseCount);
  console.log("Number of lower case characters: " + lowerCaseCount);
}
countUpperCaseLowerCase(driverName);
countUpperCaseLowerCase(navigatorName);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
let spacedUpperCaseDriverName = "";
for (let i = 0; i < driverName.length; i++) {
    spacedUpperCaseDriverName += driverName[i].toUpperCase() + " ";
}
console.log(spacedUpperCaseDriverName.trim());

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
let reversedNavigatorName = "";
for (let i = navigatorName.length - 1; i >= 0; i--) {
    reversedNavigatorName += navigatorName[i];
}
console.log(reversedNavigatorName);

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
let mergedNames = navigatorName + " " + driverName;
console.log(mergedNames);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (driverName.localeCompare(navigatorName) < 0) {
  console.log("The driver's name goes first.");
} else if (driverName.localeCompare(navigatorName) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
function loremGenerator(){

  let textCounter = 0;

  let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra pretium
  dapibus. Fusce nulla dolor, ornare blandit purus sed, accumsan mattis sem. Quisques
  uscipit urna a vestibulum rutrum. In nec finibus nibh, viverra fringilla nunc. Aenean
  lobortis fermentum eros vel dictum. Praesent sit amet tellus sodales, vehicula justo id,
  euismod purus. Aliquam at tortor arcu. Suspendisse neque tortor, fermentum eu ullamcorper a,
  vehicula et leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus
  ullamcorper lobortis. Etiam lacus tortor, venenatis a hendrerit ac, venenatis a erat. Fusce
  velit nibh, fringilla eu scelerisque vitae, interdum et nibh.
  Phasellus vehicula purus libero, id dictum quam iaculis vitae. Maecenas quis metus bibendum, 
  commodo tortor eget, placerat urna. Sed facilisis tincidunt diam ac mollis. Donec suscipit 
  malesuada massa sit amet blandit. Phasellus in consequat nibh. Vivamus vestibulum dolor metus, 
  id molestie odio porttitor quis. Mauris tempus tempus gravida. Aenean consequat blandit odio, eu 
  eleifend dolor hendrerit nec. Aliquam volutpat tortor in eros porta, consequat facilisis ipsum 
  lacinia. Vestibulum facilisis tempus ligula id sodales. Donec at libero magna. Donec egestas lacus 
  tellus, vitae suscipit felis tristique eget. Praesent ex erat, imperdiet a molestie facilisis, 
  laoreet a ipsum. Vestibulum et metus a turpis fringilla egestas quis vitae leo. Maecenas tempus 
  eu nunc sed pellentesque. Suspendisse ultricies metus eget porta pharetra.
  Donec interdum dapibus dolor, vitae tempor magna maximus id. Nullam ut erat at odio accumsan 
  molestie non non dolor. Integer in vehicula ipsum, ornare efficitur nibh. Praesent in gravida velit. 
  Aliquam vitae nisi dictum justo sollicitudin suscipit quis condimentum arcu. Vivamus ac ex sollicitudin 
  tortor eleifend dignissim. Maecenas ultrices arcu augue, quis cursus nisi aliquam quis. Nunc egestas nibh 
  augue, id sollicitudin quam tincidunt in.
  `
  
  console.log(text.split(' ').filter(function(n) { return n != '' }).length);
  console.log(text.split(' ').filter(function(n) { return n != '' }).filter(function(m) { return m == 'et' })
  .length);
  
}
loremGenerator()

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
function palindromeCheck(givenString){
  let newString = givenString.toLowerCase();
  newString = newString.split(' ').filter(function(n) { return n != '' })
  let mainString = "";
  for(let index=0; index<givenString.length; index++){
    if(givenString[index]!==" " && givenString[index]!==","){
      mainString+=givenString[index]
    }
  }
  mainString = mainString.toLowerCase()

  const len = mainString.length;

  for (let i = 0; i < len / 2; i++) {

    if (mainString[i] !== mainString[len - 1 - i]) {
      return 'It is not a palindrome';
    }
  }
    return 'It is a palindrome';
}
console.log(palindromeCheck("A man, a plan, a canal, Panama"))
