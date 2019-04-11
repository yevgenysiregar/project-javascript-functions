function peopleName(name) {
  console.log(`Hello, ${name}!`);
}

const nameA = "Adam";
const nameB = "Bobby";

peopleName(nameA);
peopleName(nameB);

const checkAge = function checkAge(age) {
  if (age >= 18) {
    console.log("You are old enough");
  } else if (age < 18 && age > 0) {
    console.log("You are still underage");
  } else {
    console.log("You are not born yet");
  }
};
checkAge(19);
checkAge(15);
checkAge(-5);

const textMarks = (text, mark, times) => {
  let newText = text;
  for (let i = 1; i <= times; i++) {
    newText += mark;
  }
  console.log(newText);
};

textMarks("Hi", "!", 2);
textMarks("Hi", "!", 3);
textMarks("Hmm", ".", 3);
textMarks("Hmm", ".", 5);

const showNameWithAge = function(name = "Unknown", age = 0) {
  const nameWithAge = `Hi! My name is ${name}, and I'm ${age} years old`;
  return nameWithAge;
};

const alex = showNameWithAge("Alex", 25);
const bobby = showNameWithAge("Bobby", 20);
const james = showNameWithAge("James", 30);

console.log(alex);
console.log(bobby);
console.log(james);
