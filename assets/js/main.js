let name = "Veronica";
let nachname = "Mayer";
let alter = 25;
const hobbies = ["Squash", "Amnesty", "Surfen", "Fotografie"];
let hobbiesString = hobbies.join(", ");
let lieblingsessen = "Ramen";

let concat1 = "Mein Name ist " + name + " " + nachname + ". Ich bin " + alter + " Jahre alt."; 
let concat2 = `Meine Hobbies sind ${hobbiesString}, und am liebsten esse ich ${lieblingsessen}.`;

console.log(concat1);
console.log(concat2);

const variables = [concat1, concat2]
const pTags = document.querySelectorAll("p");

variables.forEach((val, index) => {
    pTags[index].innerHTML = val;
});
