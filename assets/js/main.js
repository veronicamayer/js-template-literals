let name = "Veronica";
let nachname = "Mayer";
let alter = 25;
let geburtsort = "Waldkirch";
let größe = 170;
let gewicht = 56;
const hobbies = ["Squash", "Amnesty", "Surfen", "Fotografie"];
let hobbiesString = hobbies.join(", ");
const computerspiele = ["Mario Party", "Zelda"];
let computerspieleString = computerspiele.join(", ");
let lieblingsessen = "Ramen";
let lieblingssport = "Turnen";
let lieblingsmodemarke = "Armed Angels";
let lieblingsjahreszeit = "Sommer";
let lieblingsurlaubsort = "New York";

let concat1 = "Mein Name ist " + name + " " + nachname + ". Ich bin " + alter + " Jahre alt."; 
let concat2 = `Meine Hobbies sind ${hobbiesString}, und am liebsten esse ich ${lieblingsessen}.`;

console.log(concat1);
console.log(concat2);

const variables = [concat1, concat2]
const pTags = document.querySelectorAll("p");

variables.forEach((val, index) => {
    pTags[index].innerHTML = val;
});
