// Global Variable
const countriesList = document.getElementById("countries");
let countries; //will contain "fetched" data 
// event lisener
countriesList.addEventListener("change", function(event) {
	// console.log(event.target.value);
	displayCountryInfo(event.target.value);
});
fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));
 
function initialize(countriesData) {
	countries = countriesData;
	let options = "";
	countries.forEach(country => options += `<option value="${country.alpha3Code}">${country.name}</option>`);

	countriesList.innerHTML = options;
	displayCountryInfo("AFG");
}

function displayCountryInfo(countryByAlpha3Code) {
const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
// console.log(countryData);
document.getElementById("capital").innerHTML = countryData.capital;
document.querySelector("#flag-container img").src= countryData.flag;
	document.querySelector("#countrycode ").placeholder = `+${countryData.callingCodes[0]}`;
	document.getElementById("dialing-code").innerHTML = `+${countryData.callingCodes[0]}`;
	document.getElementById("population").innerHTML = countryData.population;
	document.getElementById("currencies").innerHTML = countryData.currencies.map(c => `${c.name} (${c.code})`);
	document.getElementById("region").innerHTML = countryData.region;
	document.getElementById("subregion").innerHTML = countryData.subregion;
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(350,100);
ctx.stroke();
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(165, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.font = "30px Arial";
ctx.strokeText("Hope you like the API", 10, 50);
