// EXERCISE #1 - 2 argumenter
// function sum(num1, num2){
// return num1 + num2
// }
// sum(40,2)
// sum(42,0)
// console.log("the answer to everything is", sum(42,0)) 

sum = (num1, num2) => {
    return num1 + num2
}
console.log("the answer to everything is", sum(42,0))

// EXERCISE #2 - 1 argument
// function stringLength(str){
// console.log(`the length of "${str}" is:`, str.length)
// }

let longestCityNameInTheWorld =
"Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"
// stringLength(longestCityNameInTheWorld)

stringLength = str => console.log(`the length of "${str}" is:`, str.length)
stringLength(longestCityNameInTheWorld)


// EXERCISE #3 - 1 argument igen
// function stringLength(str){
// let length = str.length
// console.log(`the length of "${str}" is:`, length)
// return str.length
// }

stringLength_2 = str => {
    let length = str.length
 console.log(`the length of "${str}" is:`, length)
 return str.length
}
stringLength_2("willynilly")


let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

// function showAlert(name){
// alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`) }

showAlert = name => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`) 
showAlert("you ball of fluff")