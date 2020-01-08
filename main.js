// Global Variable
const countriesList = document.getElementById("countries");
let countries; //will contain "fetched" data 
// event lisener
countriesList.addEventListener("change", function(event) {
	// console.log(event.target.value);
	displayCountryInfo(event.target.value);
});

// fetch("https://restcountries.eu/rest/v2/all")
// .then(function(res){
// 	// console.log(res.json());
// 	return res.json();
// })
// .then(function(data){
// 	// console.log(data);
// 	initialize(data);
// })
// .catch(function(err){
// 	console.log("Error:", err);
// });
// console.log()

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));
 
function initialize(countriesData) {
	countries = countriesData;
	let options = "";
	// let countrycode = "";
	// let cap = "";
	// let flag = "";
	// for(let i=0; i<countries.length; i++) {
	// 	options += `<option value="${countries[i].alpha3Code}">${countries[i].name}</option>`;
	// 	cap = `Capital: <span id="capital">${countries[i].capital}</span>`;
	// 	flag = `<img src="${countries[i].flag}" alt="">`;
	// }

	countries.forEach(country => options += `<option value="${country.alpha3Code}">${country.name}</option>`);

	countriesList.innerHTML = options;
	displayCountryInfo("AFG");
		// countrycode += `
  //               <input type="text" name="phone" placeholder="${countries[i].callingCodes}" class="form-control col-md-6" required id="phone_number">`
	
	// document.getElementById("countries").innerHTML = options;
	// document.getElementById("flag-container").innerHTML = flag;
	// document.getElementById("capital").innerHTML = cap;

	// }
	// var bread = "The page location is :" + window.location.pathname;
	// document.getElementById("cap").innerHTML = bread;
}

function displayCountryInfo(countryByAlpha3Code) {
const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
console.log(countryData);
document.getElementById("capital").innerHTML = countryData.capital;
document.querySelector("#flag-container img").src= countryData.flag;
	document.querySelector("#countrycode ").placeholder = `+${countryData.callingCodes[0]}`;
	document.getElementById("dialing-code").innerHTML = `+${countryData.callingCodes[0]}`;
}



//     $.get('https://restcountries.eu/rest/v2/all',
//             function (data, status) {
//                 var opt = '<option>Select Country</option>';
//                 var sel = $('#countryid');
// //                    for (var i = 0; i < data.length; i++) {
// //                        opt = opt+'<option>'+data[i].name+'<option>';
// //                    }
//                 var counter = 0;
//                 for (var i in data) {
//                     opt += '<option>' + data[counter].name + '</option>';
//                     counter++;
//                 }
//                 $(sel).html(opt);
//             }
//     );
//     $('#countryid').change(function () {
//         var country = $(this).val().trim();
//         if (country === 'Select Country' || country.length === 0) {
//             $('.custom-flag-holder').css('display', 'inline');
//             $('.custom-svg').css('display', 'none');
//             $('#phone_number').attr('placeholder', 'Your Phone number...');
//         } else {
//             if (!country.indexOf(' ') == -1) {
//                 country = country.substring(0, country.indexOf(' '));
// //                alert('else : ' + country);
//             }
//             $.get('https://restcountries.eu/rest/v2/name/' + country + '',
//                     function (data, status) {
//                         $('.custom-flag-holder').css('display', 'none');
//                         $('.custom-svg').css('display', 'inline').attr('src', data[0].flag);
//                         $('#phone_number').attr('placeholder', '+(' + data[0].callingCodes + ') ...');
//                     }
//             );
//         }

    // }
// setTimeout(() => {
// 	console.log(countries);
// }, 500);