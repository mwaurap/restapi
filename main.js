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
console.log(countryData);
document.getElementById("capital").innerHTML = countryData.capital;
document.querySelector("#flag-container img").src= countryData.flag;
	document.querySelector("#countrycode ").placeholder = `+${countryData.callingCodes[0]}`;
	document.getElementById("dialing-code").innerHTML = `+${countryData.callingCodes[0]}`;
}