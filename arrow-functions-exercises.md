<h1>Omskrivning af functions til arrow functions</h1>
<h2>Hvordan fungerer det?</h2>
<p>1. Kopier den oprindelige funktion og se, hvad den returnerer.</p>
<p>2. Omskriv dem til arrow functions, og kør dem i konsollen.</p>
<hr>
<h3>EXERCISE #1 - 2 argumenter</h3>
function sum(num1, num2){<br />
    return num1 + num2<br />
}
<br />
sum(40,2)<br />
sum(42,0)<br />
console.log("the answer to everything is", sum(42,0))

<hr />

<h3>EXERCISE #2 - 1 argument</h3>
function stringLength(str){<br />
    console.log(`the length of "${str}" is:`, str.length)<br />
}
<br /><br />
let longestCityNameInTheWorld = <br />"Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"
<br />
stringLength(longestCityNameInTheWorld)

<hr />

<h3>EXERCISE #3 - 1 argument igen</h3>
function stringLength(str){<br />
    let length = str.length<br />
    console.log(`the length of "${str}" is:`, length)<br />
    return str.length<br />
}
<br /><br />
stringLength("willynilly")

<hr />

<h3>EXERCISE #4 - 1 argument igen, igen</h3>
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]<br /><br />

function showAlert(name){   <br /> 
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}<br /><br />

showAlert("you ball of fluff")